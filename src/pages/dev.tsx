import React, {
    Fragment,
    Component,
    Children,
    cloneElement,
    useState,
    useEffect,
    useRef,
    forwardRef
} from 'react';
// const { createStore } = Redux;
import { createStore } from 'redux';


const rooms = [
    {
        id: 0,
        name: "Modern",
        alt: "Modern Living Room",
        description: "A “store in style” kind of living room",
        src:
            "https://www.ikea.com/images/eket-cabinet-in-anthracite-in-a-living-room-with-cream-leath-235441c5fc0309c162129ca1eed37d87.jpg?f=xxxl",
        itemIds: [11, 12, 13, 14, 15]
    },
    {
        id: 1,
        name: "Traditional",
        alt: "Traditional Living Room",
        description: "Me and my multigenerational home",
        src:
            "https://www.ikea.com/images/4-seat-lidhult-corner-sofa-in-dark-brown-leather-in-a-living-25ec4a87ce4bb639f803b29d5a4986dc.jpg?f=xxxl",
        itemIds: [21, 22, 23, 24, 25]
    },
    {
        id: 2,
        name: "Unique",
        alt: "A living room with a designer's touch",
        description: "A living room with a designer's touch",
        src:
            "https://www.ikea.com/images/golden-brown-leather-landskrona-sofa-with-long-chaise-and-fo-13443229847bbc90fd1b632e8805c0a9.jpg?f=xxxl",
        itemIds: [31, 32, 33, 34, 35]
    }
];

const items = [
    {
        id: 11,
        preview:
            "https://www.ikea.com/images/eket-wall-mounted-shelving-units-in-various-colours-above-a--b4b69704dbc5a69451040954a463161e.jpg?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0715172_PE730357_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0715171_PE730356_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0703489_PE724760_S5.JPG?f=xl"
        ],
        brand: "EKET",
        name: "Wall-mounted shelving unit",
        description: 'red, 13 3/4x9 7/8x13 3/4 " (35x25x35 cm)',
        price: 25.0
    },
    {
        id: 12,
        preview:
            "https://www.ikea.com/images/eket-dark-grey-cabinet-combination-with-a-silver-stockholm-2-bbfbe8e82c93b05f4588b497457d5390.jpg?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0709231_PE726890_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0716578_PE730931_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0744957_PE743502_S5.JPG?f=xl"
        ],
        brand: "EKET",
        name: "Storage combination with legs",
        description: 'dark gray, 27 1/2x13 3/4x31 1/2 " (70x35x80 cm)',
        price: 135.0
    },

    {
        id: 13,
        preview:
            "https://www.ikea.com/images/gamlehult-rattan-footstool-with-hidden-storage-in-front-of-a-a274605c1c6f49ea9f6f4b0993eb1f95.jpg?f=m",
        images: [
            "https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842809_PE719505_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842801_PE716938_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0672900_PE716937_S5.JPG?f=xl"
        ],
        brand: "GAMLEHULT",
        name: "Footstool with storage",
        description: "rattan, anthracite",
        price: 79.99
    },
    {
        id: 14,
        preview:
            "https://www.ikea.com/images/hoppvals-white-cellular-blind-hung-on-a-window-with-an-outdo-15f26081ffbe10f9725f7d33e52680e9.jpg?f=m",
        images: [
            "https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0720260_PE732492_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0892426_PE574007_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0892438_PE574666_S5.JPG?f=xl"
        ],
        brand: "HOPPVALS",
        name: "Cellular blind",
        description: 'white, 27x64 " (68.6x163 cm)',
        price: 29.99
    },
    {
        id: 15,
        preview:
            "https://www.ikea.com/images/poaeng-armchair-in-white-stained-oak-veneer-with-a-cream-lea-cd87cafa6bbbf9aa6a9be4a44ad9752a.jpg?f=m",
        images: [
            "https://www.ikea.com/ca/en/images/products/poaeng-armchair__0837647_PE601073_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/poaeng-armchair__0250853_PE389390_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/poaeng-armchair__0836872_PE585629_S5.JPG?f=xl"
        ],
        brand: "POÄNG",
        name: "Armchair",
        description: "birch veneer, Robust Glose off-white",
        price: 199.0
    },
    {
        id: 21,
        preview:
            "https://www.ikea.com/images/dark-brown-leather-lidhult-sofa-decorated-with-sanela-cushio-afdfc438e21a2ba000b4bcba39240eb9.jpg?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888909_PE682834_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888897_PE682832_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888897_PE682832_S5.JPG?f=xl",

            "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888912_PE682835_S5.JPG?f=xl"
        ],
        brand: "SANELA",
        name: "Cushion cover",
        description: 'dark red, 16x26 " (40x65 cm)',
        price: 9.99
    },
    {
        id: 22,
        preview:
            "https://www.ikea.com/images/listerby-round-brown-wood-coffee-table-with-shelf-underneath-a51aeeb8ff4be5a82b900cf372a9039c.jpg?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0835984_PE693238_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0705840_PH155559_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0676412_PH155555_S5.JPG?f=xl"
        ],
        brand: "LISTERBY",
        name: "Coffee table",
        description: 'brown, 35 3/8 " (90 cm)',
        price: 179.0
    },
    {
        id: 23,
        preview:
            "https://www.ikea.com/images/two-dark-grey-strandmon-armchairs-with-sanela-pastel-coloure-9203893cab2773177bc72bdffa25ed7a.jpg?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0835984_PE693238_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0705840_PH155559_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0676412_PH155555_S5.JPG?f=xl"
        ],
        brand: "STRANDMON",
        name: "Armchair",
        description: "Nordvalla dark gray",
        price: 299.0
    },
    {
        id: 24,
        preview:
            "https://www.ikea.com/images/evedal-hanging-pendant-lamps-arranged-at-different-heights-a-6ab0d2486a8c530195ef8a806b66d1fb.jpg?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0880982_PE680880_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0702740_PH155545_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0795471_PH163226_S5.JPG?f=xl"
        ],
        brand: "EVEDAL",
        name: "Pendant lamp",
        description: "gray",
        price: 149.0
    },
    {
        id: 25,
        preview:
            "https://www.ikea.com/images/an-evedal-dome-shaped-table-lamp-next-to-three-glittrig-whit-bd6a1f7a02c03660ac4bc54be9fe251a.jpg?f=xxxl",
        images: [
            "https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0879408_PE712302_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0686393_PH155558_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0879422_PE712304_S5.JPG?f=xl"
        ],
        brand: "EVEDAL",
        name: "Table lamp",
        description: "gray",
        price: 199.0
    },
    {
        id: 31,
        preview:
            "https://www.ikea.com/ca/en/images/products/lampan-table-lamp__0879365_PE674068_S5.JPG?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/lampan-table-lamp__0879372_PE674069_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/lampan-table-lamp__0743229_PH158299_S5.JPG?f=xl"
        ],
        brand: "MORABO",
        name: "Table lamp",
        description: 'brown, 11 " (29 cm)',
        price: 8.99
    },
    {
        id: 32,
        preview:
            "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0902886_PE685232_S5.JPG?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0663508_PH153605_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0686393_PH155558_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0902883_PE685231_S5.JPG?f=xl"
        ],
        brand: "GLITTRIG",
        name: "Candlestick",
        description: "set of 3, ivory, gold-colour",
        price: 19.99
    },
    {
        id: 33,
        preview:
            "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0837327_PE601023_S5.JPG?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0325828_PE517686_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0325825_PE517684_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0325827_PE517685_S5.JPG?f=xl"
        ],
        brand: "RÅDVIKEN",
        name: "Armchair",
        description: "dark brown, black",
        price: 199.0
    },
    {
        id: 34,
        preview:
            "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0837170_PE601372_S5.JPG?f=xl",
        images: [
            "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0258118_PE402030_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0258118_PE402030_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0837158_PE365379_S5.JPG?f=xl"
        ],
        brand: "STOCKHOLM",
        name: "Nesting tables",
        description: "set of 2, walnut veneer",
        price: 299.0
    },

    {
        id: 35,
        preview:
            "https://www.ikea.com/images/closeup-of-stockholm-mirrors-deep-ledge-holding-small-perfum-a473667de2f3799fa726e81cd939274f.jpg?f=m",
        images: [
            "https://www.ikea.com/ca/en/images/products/stockholm-mirror-walnut-veneer__0906302_PE555467_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/stockholm-mirror-walnut-veneer__0906306_PE658294_S5.JPG?f=xl",
            "https://www.ikea.com/ca/en/images/products/stockholm-mirror-walnut-veneer__0212204_PE362775_S5.JPG?f=xl"
        ],
        brand: "STOCKHOLM",
        name: "Mirror",
        description: 'walnut veneer, 31 1/2 " (80 cm)',
        price: 99.0
    }
];

const getRooms = () => rooms;

const getItems = (roomId) => {
    const { itemIds } = rooms[roomId];
    return items
        .filter((item) => itemIds.includes(item.id))
        .map((item) => ({ id: item.id, name: item.name, preview: item.preview }));
};

const getItem = (itemId) => {
    return items.filter((item) => item.id === Number(itemId))[0];
};

const getNextItemId = (roomId, itemId) => {
    const { itemIds } = rooms[roomId];
    for (let i = 0; i < itemIds.length; i++) {
        if (itemIds[i] === Number(itemId) && i < itemIds.length - 1)
            return itemIds[i + 1];
    }
    return 0;
};

const getPrevItemId = (roomId, itemId) => {
    const { itemIds } = rooms[roomId];
    for (let i = 0; i < itemIds.length; i++) {
        if (itemIds[i] === Number(itemId) && i > 0) return itemIds[i - 1];
    }
    return 0;
};

const AnchorMenu = ({ anchorEl, children, className, ...props }) => {
    const coord = (elem) => {
        let rect = elem.getBoundingClientRect();
        let left =
            rect.left + (window.pageXOffset || document.documentElement.scrollLeft),
            top =
                rect.top + (window.pageYOffset || document.documentElement.scrollTop),
            right = left + elem.clientWidth,
            bottom = top + elem.clientHeight;
        return { left, right, top, bottom };
    };
    if (anchorEl) {
        const { right, bottom } = coord(anchorEl);

        return (
            <Menu
                {...props}
                className={"anchor-menu" + (className ? " " + className : "")}
                style={{
                    top: bottom,
                    right: window.innerWidth - right,
                    ...props.style
                }}
            >
                {children}
            </Menu>
        );
    } else return null;
};

const Badge = ({ className, children, visible, content, ...props }) => {
    return (
        <div className={className ? " " + className : ""}>
            {cloneElement(children, {
                ...props,
                "data-text": content,
                className: children.props.className + (visible ? " " + "badge" : "")
            })}
        </div>
    );
};

const Button = ({ className, children, color, ...props }) => (
    <button {...props} className={"button" + (className ? " " + className : "")}>
        {children}
    </button>
);

const CarouselButton = forwardRef(({ direction, className, ...props }, ref) => {
    return (
        <Button {...props} ref={ref} className={className ? className : ""}>
            {direction === "left" ? "<" : ">"}
        </Button>
    );
});

const CarouselItem = forwardRef(
    ({ name, alt, src, width, children, className, ...props }, ref) => (
        <div
            {...props}
            className={"carouselItem" + (className ? " " + className : "")}
            ref={ref}
            style={{
                width: width,
                height: width,
                ...props.style
            }}
        >
            <img name={name} src={src} alt={alt} style={{ width: width }} />
        </div>
    )
);

class Carousel extends Component {
    state = {
        count: 1,
        translateX: -this.props.width,
        shiftEffect: true,
        startX: 0
    };

    numItem = Children.toArray(this.props.children).length + 2;
    initX = 0;

    shift = function (direction) {
        if (direction !== -1 && direction !== 1) return;

        const { count } = this.state;
        const { width } = this.props;

        if (
            (count >= this.numItem - 1 && direction === 1) ||
            (count <= 0 && direction === -1)
        )
            return;

        this.setState({
            count: count + direction,
            translateX: -(count + direction) * width,
            shiftEffect: true
        });
    };

    transitionEnd = function () {
        const { count } = this.state;
        const { width } = this.props;

        let updated_count =
            count <= 0 ? this.numItem - 2 : count >= this.numItem - 1 ? 1 : count;
        let updated_translateX = -updated_count * width;

        this.setState({
            count: updated_count,
            translateX: updated_translateX,
            shiftEffect: false
        });
    };

    dragStart = function (e) {
        e = e || window.event;
        e.preventDefault();

        this.initX = this.state.translateX;
        let startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;

        this.setState({ startX }, () => {
            document.onmousemove = this.dragAction.bind(this);
            document.onmouseup = this.dragEnd.bind(this);
        });
    };

    dragAction = function (e) {
        e = e || window.event;
        let endX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;

        const { startX, translateX } = this.state;
        this.setState({
            translateX: translateX + endX - startX,
            startX: endX
        });
    };

    dragEnd = function (e) {
        const { translateX } = this.state;
        const { width } = this.props;

        if (translateX - this.initX < -width / 3) this.shift(1);
        else if (translateX - this.initX > width / 3) this.shift(-1);
        else this.setState({ translateX: this.initX });
        document.onmousemove = null;
        document.onmouseup = null;
    };

    render = function () {
        const { translateX, shiftEffect } = this.state;
        const { children, width } = this.props;
        const items = Children.toArray(children);

        return (
            <div
                {...this.props}
                className={
                    "carouselContainer" +
                    (this.props.className ? " " + this.props.className : "")
                }
                style={{ width: width }}
            >
                <div className="carousel" style={{ width: width }}>
                    <div
                        className="carouselSlide"
                        ref={this.slide}
                        style={{
                            width: this.numItem * width,
                            transform: `translateX(${translateX}px)`,
                            transition: shiftEffect ? "0.5s ease-out" : ""
                        }}
                        onTransitionEnd={this.transitionEnd.bind(this)}
                        onMouseDown={this.dragStart.bind(this)}
                        onTouchStart={this.dragStart.bind(this)}
                        onTouchMove={this.dragAction.bind(this)}
                        onTouchEnd={this.dragEnd.bind(this)}
                    >
                        {cloneElement(items[items.length - 1], {
                            width: width
                        })}
                        {items.map((child, idx) => cloneElement(child, { width: width }))}
                        {cloneElement(items[0], { width: width })}
                    </div>
                </div>
                <CarouselButton
                    className="btnLeft button"
                    direction="left"
                    onClick={() => {
                        this.shift(-1);
                    }}
                />
                <CarouselButton
                    className="btnRight button"
                    direction="right"
                    onClick={() => {
                        this.shift(1);
                    }}
                />
            </div>
        );
    };
}

const Container = forwardRef(({ className, ...props }, ref) => {
    return (
        <main
            {...props}
            ref={ref}
            className={"container" + (className ? " " + className : "")}
        >
            {props.children}
        </main>
    );
});

const Divider = ({ className, ...props }) => {
    return (
        <div
            {...props}
            className={"divider" + (className ? " " + className : "")}
        ></div>
    );
};

const Grid = forwardRef(({ images, children, className, ...props }, ref) => {
    return (
        <div
            {...props}
            ref={ref}
            role="grid"
            className={"grid" + (className ? " " + className : "")}
        >
            {children}
        </div>
    );
});

const GridItem = ({ className, ...props }) => {
    return (
        <div
            {...props}
            role="gridcell img"
            className={"gridItem" + (className ? " " + className : "")}
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: "100%"
            }}
        ></div>
    );
};

const LeftArrowIcon = (props) => (
    <svg
        t="1584613183058"
        className="icon"
        viewBox="0 0 1433 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2805"
        width="32"
        height="32"
    >
        <path
            d="M1433.6 614.4H409.6l256 256-153.6 153.6L0 512 512 0l153.6 153.6-256 256h1024z"
            fill="currentColor"
            p-id="2806"
        ></path>
        <path
            d="M1024 409.6v204.8h409.6V409.6z"
            fill="currentColor"
            p-id="2807"
        ></path>
    </svg>
);

const RightArrowIcon = (props) => (
    <svg
        t="1584613130103"
        className="icon"
        viewBox="0 0 1433 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2474"
        width="32"
        height="32"
    >
        <path
            d="M0 614.4h1024l-256 256 153.6 153.6 512-512L921.6 0l-153.6 153.6 256 256H0z"
            fill="currentColor"
            p-id="2475"
        ></path>
        <path
            d="M409.6 409.6v204.8H0V409.6z"
            fill="currentColor"
            p-id="2476"
        ></path>
    </svg>
);

const CartIcon = (props) => (
    <svg
        t="1585123812662"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2138"
        width="32"
        height="32"
    >
        <path
            d="M912.64 200A21.312 21.312 0 0 0 896 192H170.666667v426.666667h640c10.005333 0 18.645333-6.954667 20.842666-16.704l85.333334-384a21.333333 21.333333 0 0 0-4.202667-17.962667z"
            fill="currentColor"
            p-id="2139"
        ></path>
        <path
            d="M981.333333 746.666667H170.666667a21.333333 21.333333 0 0 1-21.333334-21.333334V106.666667H42.666667a21.333333 21.333333 0 1 1 0-42.666667h128a21.333333 21.333333 0 0 1 21.333333 21.333333v618.666667h789.333333a21.333333 21.333333 0 1 1 0 42.666667z"
            fill="currentColor"
            p-id="2140"
        ></path>
        <path
            d="M277.333333 789.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667zM853.333333 789.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667z"
            fill="currentColor"
            p-id="2141"
        ></path>
        <path
            d="M277.333333 874.666667m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
            fill="currentColor"
            p-id="2142"
        ></path>
        <path
            d="M853.333333 874.666667m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
            fill="currentColor"
            p-id="2143"
        ></path>
    </svg>
);

const HeartIcon = (props) => (
    <svg
        t="1585124515213"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4657"
        width="32"
        height="32"
    >
        <path
            d="M725.306 42.696c-83.56 0-159.122 34.342-213.306 89.668-54.202-55.326-129.746-89.668-213.32-89.668C133.732 42.696 0.018 176.41 0.018 341.342 0.018 682.69 512 981.304 512 981.304s511.982-298.616 511.982-639.962c0-164.932-133.714-298.646-298.676-298.646z"
            fill="currentColor"
            p-id="4658"
        ></path>
        <path
            d="M725.306 42.696a299.8 299.8 0 0 0-42.624 3.046c144.714 20.702 255.992 145.15 255.992 295.6 0 280.756-346.394 532.624-469.344 613.182 26.53 17.406 42.67 26.78 42.67 26.78s511.982-298.616 511.982-639.962c0-164.932-133.714-298.646-298.676-298.646z"
            fill="currentColor"
            opacity=".2"
            p-id="4659"
        ></path>
    </svg>
);

const MenuIcon = (props) => (
    <svg
        t="1585219948859"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2332"
        width="32"
        height="32"
    >
        <path
            d="M128 469.333333m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533334l0 4.266666q0 40.533333-40.533333 40.533334l-686.933334 0q-40.533333 0-40.533333-40.533334l0-4.266666q0-40.533333 40.533333-40.533334Z"
            fill="currentColor"
            p-id="2333"
        ></path>
        <path
            d="M128 682.666667m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z"
            fill="currentColor"
            p-id="2334"
        ></path>
        <path
            d="M128 256m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z"
            fill="currentColor"
            p-id="2335"
        ></path>
    </svg>
);

const Input = forwardRef(
    ({ className, required, labelText, ...props }, ref) => {
        return (
            <input
                {...props}
                aria-label={labelText}
                aria-required={required}
                ref={ref}
                className={"input" + (className ? " " + className : "")}
            />
        );
    }
);

const Menu = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            role="list"
            className={"menu" + (className ? " " + className : "")}
        >
            {children}
        </div>
    );
};

const MenuItem = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            role="listitem"
            className={"menuItem" + (className ? " " + className : "")}
        >
            {children}
        </div>
    );
};

const FavItem = forwardRef(
    ({ className, displayQty = false, item, ...props }, ref) => {
        return (
            <MenuItem className="favMenuItem">
                <img src={item.avatar} alt={item.name} />
                <div className="menuItemText">
                    <div>{item.brand}</div>
                    <div>{item.name}</div>
                    {displayQty ? (
                        <div className="menuItemQty">x {item.quantity}</div>
                    ) : null}
                </div>
            </MenuItem>
        );
    }
);

const CartItem = forwardRef(({ className, item, ...props }, ref) => {
    return <FavItem displayQty item={item} />;
});

const FavMenu = forwardRef(({ className, fav, anchorEl, ...props }, ref) => {
    const items = Object.keys(fav).reduce(
        (acc, id) => (fav[id] ? [...acc, fav[id]] : acc),
        []
    );

    return (
        <AnchorMenu anchorEl={anchorEl}>
            {items.length > 0 ? (
                items.map((item) => (
                    <Fragment key={item.id}>
                        <FavItem item={item} />
                        <Divider />
                    </Fragment>
                ))
            ) : (
                <MenuItem>
                    <span style={{ margin: "auto" }}>Your haven't liked any items.</span>
                </MenuItem>
            )}
        </AnchorMenu>
    );
});

const CartMenu = forwardRef(({ className, cart, anchorEl, ...props }, ref) => {
    return (
        <AnchorMenu anchorEl={anchorEl}>
            {Object.keys(cart).length > 0 ? (
                Object.keys(cart).map((id) => (
                    <Fragment key={id}>
                        <CartItem item={cart[id]} />
                        <Divider />
                    </Fragment>
                ))
            ) : (
                <MenuItem>
                    <span style={{ margin: "auto" }}>Your shopping cart is empty.</span>
                </MenuItem>
            )}
        </AnchorMenu>
    );
});

const SlideButton = ({ direction, className, ...props }) => (
    <Button
        {...props}
        className={className ? " " + className : ""}
        title={direction === "left" ? "Previous room" : "Next room"}
        aria-label={direction === "left" ? "Previous room" : "Next room"}
    >
        {direction === "left" ? <LeftArrowIcon /> : <RightArrowIcon />}
    </Button>
);

const SlideItem = ({ className, src, hidden, ...props }) => {
    return (
        <div
            {...props}
            className={"slideItem" + (className ? " " + className : "")}
            style={{
                backgroundImage: `url(${src})`,
                opacity: hidden ? 0 : 1,
                ...props.style
            }}
        ></div>
    );
};

const animateSlide = (
    slideRef,
    titleRef,
    numberRef,
    descriptionRef,
    actionRef
) => {
    const tl = gsap.timeline();
    tl.to(
        titleRef.current,
        {
            "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
            duration: 0.32
        },
        "in"
    )
        .to(
            descriptionRef.current,
            {
                "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
                duration: 0.32
            },
            "in"
        )

        .to(numberRef.current, { opacity: 0, duration: 0.32 }, "in")
        .set(numberRef.current, { opacity: 1 }, "in+=0.32")

        .to(actionRef.current, { opacity: 0, duration: 0.32 }, "in")
        .set(actionRef.current, { opacity: 1 }, "in+=0.32")

        .to(
            titleRef.current,
            {
                "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                duration: 0.64
            },
            "in+=0.32"
        )
        .to(
            descriptionRef.current,
            {
                "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                duration: 0.64
            },
            "in+=0.32"
        );
};

const animateSlideOut = (
    slideRef,
    titleRef,
    numberRef,
    descriptionRef,
    actionRef,
    callback
) => {
    const tl = gsap.timeline();
    [titleRef, numberRef, descriptionRef, actionRef].forEach((ref) => {
        tl.to(
            ref.current,
            {
                "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
                duration: 0.32
            },
            "out"
        );
    });
    tl.to(slideRef.current, { opacity: 0, duration: 0.32 }, "out+0.32").add(
        callback,
        1
    );
};

const Slide = ({ children, store, slide, ...props }) => {
    const slides = Children.toArray(children);
    const slideQty = slides.length;

    const slideRef = useRef(),
        titleRef = useRef(),
        numberRef = useRef(),
        numberVariableRef = useRef(),
        descriptionRef = useRef(),
        actionRef = useRef();

    const shift = (direction) => {
        if (
            (slide === slideQty - 1 && direction === 1) ||
            (slide === 0 && direction === -1)
        )
            return;
        store.dispatch({ type: "SET_SLIDE", slide: slide + direction });
    };

    const viewItems = () => {
        animateSlideOut(
            slideRef,
            titleRef,
            numberRef,
            descriptionRef,
            actionRef,
            () => {
                store.dispatch({ type: "SET_SLIDE", slide });
                store.dispatch({ type: "SET_PAGE", page: 1 });
            }
        );
    };

    useEffect(() => {
        animateSlide(
            slideRef,
            titleRef,
            numberVariableRef,
            descriptionRef,
            actionRef
        );
    }, [slide]);

    return (
        <div className={"slideContainer"} ref={slideRef}>
            {slides.map((item, idx) => cloneElement(item, { hidden: idx !== slide }))}
            <div className={"slideContent"}>
                <div className={"slideNumber"} ref={numberRef}>
                    <span className={"slideNumberVariable"} ref={numberVariableRef}>
                        {slide + 1}
                    </span>
                    <span> / {slideQty}</span>
                </div>
                <div className={"slideTitle"} ref={titleRef}>
                    {slides[slide].props.name}
                </div>
                <div className={"slideButton"}>
                    <SlideButton
                        direction="left"
                        className={"leftButton"}
                        onClick={() => {
                            shift(-1);
                        }}
                    />
                    <SlideButton
                        direction="right"
                        className={"rightButton"}
                        onClick={() => {
                            shift(1);
                        }}
                    />
                </div>
                <div className={"slideDescription"} ref={descriptionRef}>
                    {slides[slide].props.description}
                </div>
                <div className={"slideAction"} ref={actionRef} onClick={viewItems}>
                    Shop This Room
                </div>
            </div>
        </div>
    );
};

const RoomsPage = ({ store, slide }) => {
    const rooms = getRooms();
    return (
        <Slide store={store} slide={slide}>
            {rooms.map((room) => (
                <SlideItem
                    src={room.src}
                    name={room.name}
                    description={room.description}
                    hidden
                />
            ))}
        </Slide>
    );
};

const animateItemsPageIn = (gridRef, textRef) => {
    const tl = gsap.timeline();
    tl.to(
        gridRef.current,
        {
            "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
            duration: 0.32
        },
        "in"
    )
        .to(
            textRef.current,
            {
                opacity: 0,
                duration: 0.32
            },
            "in"
        )

        .set(
            textRef.current,
            {
                opacity: 1
            },
            "in+=0.32"
        )
        .to(
            gridRef.current,
            {
                "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                duration: 0.96
            },
            "in+=0.32"
        );
};

const animateItemsPageOut = (gridRef, textRef, callback) => {
    const tl = gsap.timeline();
    [gridRef, textRef].forEach((ref) => {
        tl.to(
            ref.current,
            {
                "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
                duration: 0.32
            },
            "out"
        );
    });
    tl.add(callback, 1);
};

const ItemsPage = ({ slide, cart, fav, store }) => {
    const items = getItems(slide);
    const containerRef = useRef();
    const textRef = useRef();
    const gridRef = useRef();

    const openModal = (e) => {
        const { id } = e.target;
        animateItemsPageOut(gridRef, textRef, () => {
            store.dispatch({ type: "SET_ITEM", item: id });
            store.dispatch({ type: "SET_PAGE", page: 2 });
        });
    };

    const back = (e) => {
        animateItemsPageOut(gridRef, textRef, () => {
            store.dispatch({ type: "SET_PAGE", page: 0 });
        });
    };

    useEffect(() => {
        animateItemsPageIn(gridRef, textRef);
        new Draggable(gridRef.current, {
            type: "x",
            bounds: ".container",
            dragResistance: 0.35,
            inertia: true,
            throwResistance: 2000,
            onDrag: () => {
                gsap.set(".grid, .gridItem", { cursor: "grab" });
            },
            onDragEnd: () => {
                gsap.set(".grid, .gridItem", { cursor: "pointer" });
            }
        });
    }, []);

    return (
        <Container ref={containerRef} className="container items-page">
            <div className="row" ref={textRef}>
                <div className="instruction">Drag or click to view items</div>
                <div className="back" onClick={back}>
                    Go back
                </div>
            </div>
            <Grid ref={gridRef} className="grid">
                {items.map((item, idx) => (
                    <GridItem
                        className="gridItem"
                        image={item.preview}
                        title={item.name}
                        aria-label={item.name}
                        key={item.id}
                        id={item.id}
                        onClick={openModal}
                    />
                ))}
            </Grid>
        </Container>
    );
};

const animateItemPageIn = (textRef, actionRef) => {
    const tl = gsap.timeline();

    [textRef, actionRef].forEach((ref) => {
        tl.to(
            ref.current,
            {
                opacity: 0,
                duration: 0.32
            },
            "in"
        ).set(
            ref.current,
            {
                opacity: 1
            },
            "in+=0.32"
        );
    });
};

const animateItemPageOut = (textRef, actionRef, callback) => {
    const tl = gsap.timeline();
    [textRef, actionRef].forEach((ref) => {
        tl.to(
            ref.current,
            {
                opacity: 0,
                duration: 0.32
            },
            "out"
        );
    });
    tl.add(callback, 1);
};

const animateModalIn = (modalRef, callback) => {
    const tl = gsap.timeline();
    tl.to(
        modalRef.current,
        {
            "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
            duration: 0.32
        },
        "in"
    )
        .to(
            modalRef.current,
            {
                "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                duration: 0.96
            },
            "in+=0.32"
        )
        .add(callback, 0.32);
};

const animateModalOut = (modalRef, callback) => {
    const tl = gsap.timeline();
    tl.to(
        modalRef.current,
        {
            "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
            duration: 0.32
        },
        "out"
    ).add(callback, 0.32);
};

const ItemPage = ({ store, cart, fav, slide, id, ...props }) => {
    const item = getItem(id);
    const { images, brand, name, description, price } = item;

    const [nextItem, setNextItem] = useState();
    const [prevItem, setPrevItem] = useState();

    const textRef = useRef();
    const modalRef = useRef();
    const actionRef = useRef();

    useEffect(() => {
        animateItemPageIn(textRef, actionRef);
    }, []);

    useEffect(() => {
        setNextItem(getNextItemId(slide, id));
        setPrevItem(getPrevItemId(slide, id));
        animateModalIn(modalRef, textRef);
    }, [id, slide]);

    const back = (e) => {
        animateModalOut(modalRef);
        animateItemPageOut(textRef, actionRef, () => {
            store.dispatch({ type: "SET_PAGE", page: 1 });
        });
    };

    const nextModal = (e) => {
        animateModalOut(modalRef, () => {
            store.dispatch({ type: "SET_ITEM", item: nextItem });
        });
    };

    const prevModal = (e) => {
        animateModalOut(modalRef, () =>
            store.dispatch({ type: "SET_ITEM", item: prevItem })
        );
    };

    const submit = (e, action) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        store.dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                quantity: formData.get("quantity"),
                avatar: images[0],
                brand,
                name,
                price
            }
        });
    };

    const addToFav = (e) => {
        store.dispatch({
            type: "ADD_TO_FAV",
            item: {
                id,
                avatar: images[0],
                brand,
                name,
                price
            }
        });
    };

    return (
        <Container className={"item-page"}>
            <div className={"row"} ref={textRef}>
                <div className={"instruction"}>IKEA from the comfort of your home.</div>
                <div className={"back"} onClick={back}>
                    Go back
                </div>
            </div>
            <div className={"modal"} ref={modalRef}>
                <Carousel width={360}>
                    {images.map((link) => (
                        <CarouselItem src={link} key={link} name={name} alt={name} />
                    ))}
                </Carousel>
                <form className={"modalAction"} onSubmit={submit}>
                    <div className={"brand"}>
                        <b>{brand}</b>
                    </div>
                    <div>{name}</div>
                    <div>{description}</div>
                    <div>
                        <b>${price}</b>
                    </div>
                    <div className={"quantity"}>
                        <label htmlFor="quantity">Quantity: </label>
                        <Input
                            id="quantity"
                            type="number"
                            min="1"
                            max="9"
                            step="1"
                            name="quantity"
                            defaultValue="1"
                        />
                    </div>
                    <Button className={"cart"} name="cart" type="submit">
                        Add to Cart
                    </Button>
                    <Button className={"fav"} name="fav" type="button" onClick={addToFav}>
                        {`${fav[id] ? "You liked this item" : "Add to Favorites"}`}
                    </Button>
                </form>
            </div>
            <div className={"row"} ref={actionRef} style={{ marginTop: 0 }}>
                <Button className={"button"} onClick={nextModal} disabled={!nextItem}>
                    Prev item
                </Button>
                <Button className={"button"} onClick={prevModal} disabled={!prevItem}>
                    Next item
                </Button>
            </div>
        </Container>
    );
};

const AppBar = ({ cart, fav, store, ...props }) => {
    const [cartAnchorEl, setCartAnchorEl] = useState(null);
    const [favAnchorEl, setFavAnchorEl] = useState(null);
    const [drawer, setDrawer] = useState(window.innerWidth > 600);
    const drawerRef = useRef();

    const badgeContent = Object.keys(cart).reduce(
        (acc, key) => acc + cart[key].quantity,
        0
    );

    const onClickBrand = (e) => {
        store.dispatch({ type: "SET_PAGE", page: 0 });
        store.dispatch({ type: "SET_SLIDE", slide: 0 });
    };

    const toggleCartMenu = (e) => {
        setCartAnchorEl(cartAnchorEl ? null : e.currentTarget);
    };

    const toggleFavMenu = (e) => {
        setFavAnchorEl(favAnchorEl ? null : e.currentTarget);
    };

    const toggleDrawer = (e) => {
        setDrawer(!drawer);
    };

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setDrawer(window.innerWidth > 600);
        });
    }, []);

    useEffect(() => {
        const onClick = (e) => {
            setCartAnchorEl(null);
            setFavAnchorEl(null);
        };
        if (cartAnchorEl || favAnchorEl)
            document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("click", onClick);
        };
    }, [cartAnchorEl, favAnchorEl]);

    return (
        <nav {...props} className="appbar">
            <div className="row">
                <Button className="drawerBtn" onClick={toggleDrawer}>
                    <MenuIcon />
                </Button>
                <Button className="brand" role="banner" onClick={onClickBrand}>
                    IKEA
                </Button>
            </div>
            <div className="tabs" role="tabpanel" id="tabpanel">
                <div
                    className="drawer"
                    ref={drawerRef}
                    style={{ display: drawer ? "flex" : "none" }}
                >
                    {["Products", "Rooms", "Inspirations", "On Sale"].map((tab) => (
                        <Button
                            key={tab}
                            className="tab"
                            role="tab"
                            aria-controls="tabpanel"
                        >
                            {tab}
                        </Button>
                    ))}
                </div>
                <Button
                    className="tab"
                    onClick={toggleFavMenu}
                    role="tab"
                    title="liked items"
                    aria-controls="tabpanel"
                    aria-label="liked items"
                >
                    <HeartIcon />
                </Button>
                <Badge
                    className="tab"
                    content={badgeContent}
                    visible={badgeContent > 0}
                    onClick={toggleCartMenu}
                    role="tab"
                    title="Your cart"
                    aria-controls="tabpanel"
                    aria-label="Your cart"
                >
                    <Button>
                        <CartIcon />
                    </Button>
                </Badge>
            </div>
            <CartMenu anchorEl={cartAnchorEl} cart={cart} />
            <FavMenu anchorEl={favAnchorEl} fav={fav} />
        </nav>
    );
};

const App = ({ cart, fav, slide, page, item, store }) => {
    return (
        <Fragment>
            <AppBar cart={cart} fav={fav} store={store} />
            {page === 0 ? (
                <RoomsPage store={store} slide={slide} />
            ) : page === 1 ? (
                <ItemsPage
                    slide={slide}
                    cart={cart}
                    fav={fav}
                    page={page}
                    store={store}
                />
            ) : (
                <ItemPage slide={slide} id={item} cart={cart} fav={fav} store={store} />
            )}
        </Fragment>
    );
};

const initialState = {
    page: 0,
    slide: 0,
    item: 0,
    cart: {},
    fav: {}
};

const ADD_TO_CART = "ADD_TO_CART";
const ADD_TO_FAV = "ADD_TO_FAV";
const SET_PAGE = "SET_PAGE";
const SET_SLIDE = "SET_SLIDE";
const SET_ITEM = "SET_ITEM";

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const updatedState = { ...state },
                { id } = action.item,
                quantity = Number(action.item.quantity);
            if (updatedState.cart[id]) updatedState.cart[id].quantity += quantity;
            else {
                updatedState.cart[id] = {
                    ...action.item,
                    quantity
                };
            }

            return updatedState;
        }
        case ADD_TO_FAV: {
            const updatedState = { ...state },
                { id } = action.item;
            if (updatedState.fav[id]) updatedState.fav[id] = null;
            else {
                updatedState.fav[id] = {
                    ...action.item
                };
            }

            return updatedState;
        }
        case SET_PAGE:
            return { ...state, page: action.page };
        case SET_SLIDE:
            return { ...state, slide: action.slide };
        case SET_ITEM:
            return { ...state, item: action.item };
        default:
            return state;
    }
};

const store = createStore(reducers);
// store.subscribe(App);
export default App;
// render();

