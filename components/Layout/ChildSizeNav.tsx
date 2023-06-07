import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Link } from "@reach/router";
import usePathname from "../../hooks/usePathname";
import RoutePaths from "../../../../base/NavPaths";

const ChildSideNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-full">
      <div className="mx-auto w-full h-full max-w-md rounded-2xl bg-white">
        {RoutePaths.map((r, key) => (
          <Disclosure
            key={key}
            as="div"
            className={key + 2 > RoutePaths.length ? "" : "mb-2"}
            defaultOpen={pathname.includes(r.path)}
          >
            {({ open }) => (
              <>
                {r.children.length > 0 && !r.parent ? (
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{r.linkLabel}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                ) : null}
                {r.children.length === 0 && !r.parent && (
                  <Disclosure defaultOpen>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <Link to={r.path}>{r.linkLabel}</Link>
                    </Disclosure.Panel>
                  </Disclosure>
                )}

                {r.children.map((child, ckey) => (
                  <Disclosure.Panel
                    className="px-4 pt-4 pb-2 text-sm text-gray-500"
                    key={ckey}
                  >
                    <Link to={`${r.path}/${child.path}`}>
                      {child.linkLabel}
                    </Link>
                  </Disclosure.Panel>
                ))}
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default ChildSideNav;
