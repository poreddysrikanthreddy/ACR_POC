// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dXyvLu7j1Po85PHwR2Uoy6
// Component: hDAqCE24Q6sj
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { ContentfulFetcher } from "@plasmicpkgs/plasmic-contentful"; // plasmic-import: 2evg2Dug_px/codeComponent
import { ContentfulField } from "@plasmicpkgs/plasmic-contentful"; // plasmic-import: XJVyShAqlB9/codeComponent
import { GraphqlFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: 0DrxdjD45dkx/codeComponent
import Footer from "../../Footer"; // plasmic-import: 0oRBHM_nRQ2h/component
import Header from "../../Header"; // plasmic-import: AtHLQN2bcfkz/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_copy_of_app_starter.module.css"; // plasmic-import: dXyvLu7j1Po85PHwR2Uoy6/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: hDAqCE24Q6sj/css

createPlasmicElementProxy;

export const PlasmicAboutUs__VariantProps = new Array();

export const PlasmicAboutUs__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicAboutUs__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const dataSourcesCtx = usePlasmicDataSourceContext();
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <ContentfulFetcher
            data-plasmic-name={"contentfulFetcher"}
            data-plasmic-override={overrides.contentfulFetcher}
            className={classNames("__wab_instance", sty.contentfulFetcher)}
            contentType={"aboutUs"}
            noAutoRepeat={false}
            noLayout={false}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div
                  className={classNames(projectcss.all, sty.freeBox___1WWrf)}
                >
                  <ContentfulField
                    className={classNames(
                      "__wab_instance",
                      sty.contentfulField__reZyg
                    )}
                    objectPath={[
                      "description",
                      "content",
                      0,
                      "content",
                      0,
                      "value"
                    ]}
                  />

                  <ContentfulField
                    className={classNames(
                      "__wab_instance",
                      sty.contentfulField__ebAwl
                    )}
                    objectPath={[
                      "description",
                      "content",
                      1,
                      "content",
                      0,
                      "value"
                    ]}
                  />

                  <ContentfulField
                    className={classNames(
                      "__wab_instance",
                      sty.contentfulField__zNq2
                    )}
                    objectPath={["title", "content", 0, "content", 0, "value"]}
                  />

                  <ContentfulField
                    className={classNames(
                      "__wab_instance",
                      sty.contentfulField__sScpD
                    )}
                    objectPath={[
                      "introduction",
                      "content",
                      0,
                      "content",
                      0,
                      "value"
                    ]}
                  />

                  {([2, 3, 4] ?? []).map((currentItem, currentIndex) => (
                    <ContentfulField
                      className={classNames(
                        "__wab_instance",
                        sty.contentfulField___6JylL
                      )}
                      key={currentIndex}
                      objectPath={[
                        "description",
                        "content",
                        2,
                        "content",
                        0,
                        "content",
                        0,
                        "content",
                        0,
                        "value"
                      ]}
                    />
                  ))}

                  {([2, 3, 4] ?? []).map((currentItem, currentIndex) => (
                    <ContentfulField
                      className={classNames(
                        "__wab_instance",
                        sty.contentfulField__tMjdg
                      )}
                      key={currentIndex}
                      objectPath={[
                        "description",
                        "content",
                        2,
                        "content",
                        1,
                        "content",
                        0,
                        "content",
                        0,
                        "value"
                      ]}
                    />
                  ))}

                  {([2, 3, 4] ?? []).map((currentItem, currentIndex) => (
                    <ContentfulField
                      className={classNames(
                        "__wab_instance",
                        sty.contentfulField__iCuUx
                      )}
                      key={currentIndex}
                      objectPath={[
                        "description",
                        "content",
                        2,
                        "content",
                        3,
                        "content",
                        0,
                        "content",
                        0,
                        "value"
                      ]}
                    />
                  ))}

                  {([2, 3, 4] ?? []).map((currentItem, currentIndex) => (
                    <ContentfulField
                      className={classNames(
                        "__wab_instance",
                        sty.contentfulField__unTna
                      )}
                      key={currentIndex}
                      objectPath={[
                        "description",
                        "content",
                        2,
                        "content",
                        2,
                        "content",
                        0,
                        "content",
                        0,
                        "value"
                      ]}
                    />
                  ))}

                  <GraphqlFetcher
                    data-plasmic-name={"graphQlFetcher"}
                    data-plasmic-override={overrides.graphQlFetcher}
                    className={classNames("__wab_instance", sty.graphQlFetcher)}
                    dataName={"fetchedData"}
                    errorDisplay={
                      <ph.DataCtxReader>
                        {$ctx => "Error fetching data"}
                      </ph.DataCtxReader>
                    }
                    headers={{
                      "Content-Type": "application/json",
                      Accept: "application/json",
                      Origin:
                        "https://033bad1b-c8e2-4ee5-b8f8-f4c19c33ca37.ctfcloud.net",
                      Authorization:
                        "Bearer tsGcriZM3786khCW2L3uHfUXhNsCRTLNBxT0cdMio3Y"
                    }}
                    loadingDisplay={
                      <ph.DataCtxReader>
                        {$ctx => "Loading..."}
                      </ph.DataCtxReader>
                    }
                    method={"POST"}
                    noLayout={false}
                    query={{
                      query:
                        "query MyQuery {\n  assetCollection(limit: 10) {\n    items {\n      url\n    }\n  }\n}\n",
                      variables: {}
                    }}
                    url={
                      "https://graphql.contentful.com/content/v1/spaces/ezduc17zwm9j/environments/master"
                    }
                    varOverrides={{}}
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__iSf1N
                          )}
                        >
                          <p.PlasmicImg
                            data-plasmic-name={"img"}
                            data-plasmic-override={overrides.img}
                            alt={""}
                            className={classNames(sty.img)}
                            displayHeight={"277px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"100%"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"443px"}
                            loading={"lazy"}
                            src={(() => {
                              try {
                                return $ctx.fetchedData.data.assetCollection
                                  .items[0].url;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                          />

                          <Footer
                            data-plasmic-name={"footer"}
                            data-plasmic-override={overrides.footer}
                            className={classNames("__wab_instance", sty.footer)}
                          />
                        </div>
                      )}
                    </ph.DataCtxReader>
                  </GraphqlFetcher>
                </div>
              )}
            </ph.DataCtxReader>
          </ContentfulFetcher>
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "contentfulFetcher",
    "graphQlFetcher",
    "img",
    "footer",
    "header"
  ],

  contentfulFetcher: ["contentfulFetcher", "graphQlFetcher", "img", "footer"],
  graphQlFetcher: ["graphQlFetcher", "img", "footer"],
  img: ["img"],
  footer: ["footer"],
  header: ["header"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <p.PlasmicPageGuard
      minRole={"c575ce24-451d-4d21-9461-c115010546d6"}
      appId={"dXyvLu7j1Po85PHwR2Uoy6"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "dXyvLu7j1Po85PHwR2Uoy6"
    });
    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    contentfulFetcher: makeNodeComponent("contentfulFetcher"),
    graphQlFetcher: makeNodeComponent("graphQlFetcher"),
    img: makeNodeComponent("img"),
    footer: makeNodeComponent("footer"),
    header: makeNodeComponent("header"),
    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */
