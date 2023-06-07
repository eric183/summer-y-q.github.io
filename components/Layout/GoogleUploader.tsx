import { Upload, Modal, UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import { useState, useEffect } from "react";
import useGoogleImage from "../../hooks/useGoogleUpload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { create } from "zustand";

interface IGoogleUploaderProps {
  uploading: boolean;
  setUpload: (uploading: boolean) => void;
  imageUrls: UploadFile[];
  setImageUrls: (imageUrls: UploadFile[]) => void;
}

export const useUploadingStore = create<IGoogleUploaderProps>()((set) => ({
  uploading: false,
  setUpload: (uploading) => set({ uploading }),
  imageUrls: [],
  setImageUrls: (_imageUrls) =>
    set(({ imageUrls }) => ({
      imageUrls: [...imageUrls, ..._imageUrls],
    })),
}));

const GoogleUploader = () => {
  const { uploading, setUpload, imageUrls, setImageUrls } = useUploadingStore();
  const [loading, setLoading] = useState(false);
  // const [imageUrls, setImageUrls] = useState<UploadFile[]>();
  const [upload] = useGoogleImage();
  const [previewImage, setPreviewImage] = useState("");
  const [uploadList, setUploadList] = useState<RcFile[]>([]);
  const beforeUpload = async (file: RcFile, fileList: RcFile[]) => {
    setUploadList(fileList);
    return false;
  };

  const uploadHandler = async (fileList: RcFile[]) => {
    if (!fileList || fileList.length === 0) return;
    const documents = await upload(fileList);
    const docs = documents.map((document) => ({
      url: document.url,
      name: document.name,
      uid: document.id,
      status: "done" as unknown as undefined,
      response: '{"status": "success"}', // 服务端响应内容
    }));

    setImageUrls(docs);
  };

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
  };

  useEffect(() => {
    uploadHandler(uploadList);
  }, [uploadList]);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );

  return (
    <div>
      <Upload
        multiple
        listType="picture-card"
        showUploadList
        action={undefined}
        beforeUpload={beforeUpload}
        onPreview={handlePreview}
        fileList={imageUrls}
      >
        {uploadButton}
      </Upload>
      <Modal
        open={!!previewImage}
        title={"预览"}
        footer={null}
        onCancel={() => setPreviewImage("")}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default GoogleUploader;
