// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dXyvLu7j1Po85PHwR2Uoy6
// Component: E_h4tPgm0Ut
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  usePlasmicDataConfig,
  executePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: AtHLQN2bcfkz/component
import Button2 from "../../Button2"; // plasmic-import: OykjTNwBMTc/component
import Footer from "../../Footer"; // plasmic-import: 0oRBHM_nRQ2h/component
import { useScreenVariants as useScreenVariantspRlysB5IYetu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PRlysB5iYETU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_copy_of_app_starter.module.css"; // plasmic-import: dXyvLu7j1Po85PHwR2Uoy6/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: E_h4tPgm0Ut/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: NsUyZTGzS_UE/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: fPFeR0cUxtTp/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: lb5egmS2VGJp/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: ZRH4ZRzpAg4E/icon

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textbox.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textbox2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx, $refs]
  );

  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const { cache, mutate: swrMutate } = usePlasmicDataConfig();
  const mutate = swrMutate;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspRlysB5IYetu()
  });
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
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox___72FZv)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pnlCz)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"foreground"}
                data-plasmic-override={overrides.foreground}
                hasGap={true}
                className={classNames(projectcss.all, sty.foreground)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___1XVfh)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__tmZOc)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__c4EHq)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mbyPa
                        )}
                      >
                        {"Updated!"}
                      </div>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dAJs
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ textDecoration: "underline" }}
                        >
                          {"customize sourcing and delivery solutions"}
                        </span>
                      </React.Fragment>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3XYJs
                      )}
                    >
                      {
                        "over 6,000 disposable products used in the food service, janitorial, sanitation, industrial, hospitality and medical industries."
                      }
                    </div>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ffD1Q)}
                  >
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__cvGSo
                      )}
                      endIcon={
                        <Icon38Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___5UTJa
                          )}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__ehUmu)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ed98Z
                        )}
                      >
                        {"LOGIN NOW ->"}
                      </div>
                    </Button2>
                  </p.Stack>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__shsU7)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__we9PI)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___74Di9
                      )}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__mfPge)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3Ddhc
                        )}
                      >
                        {"LOGIN"}
                      </div>
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__zb7Ib
                        )}
                      >
                        <Button2
                          className={classNames(
                            "__wab_instance",
                            sty.button2__eKgtm
                          )}
                          color={"white"}
                          endIcon={
                            <Icon38Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__wiaDr
                              )}
                              role={"img"}
                            />
                          }
                          showStartIcon={true}
                          startIcon={
                            <Icon3Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__nrnS
                              )}
                              role={"img"}
                            />
                          }
                          submitsForm={true}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wrMiZ
                            )}
                          >
                            {"Apple"}
                          </div>
                        </Button2>
                        <Button2
                          className={classNames(
                            "__wab_instance",
                            sty.button2__mmb9L
                          )}
                          color={"white"}
                          endIcon={
                            <Icon38Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__uVs5
                              )}
                              role={"img"}
                            />
                          }
                          showStartIcon={true}
                          startIcon={
                            <Icon4Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__p77Zy
                              )}
                              role={"img"}
                            />
                          }
                          submitsForm={true}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___878T4
                            )}
                          >
                            {"Google"}
                          </div>
                        </Button2>
                      </p.Stack>
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___7HPeF
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ai8Rc
                          )}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__sSmBr
                          )}
                        >
                          {"Or"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__vzaBz
                          )}
                        />
                      </p.Stack>
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ij1CV
                        )}
                      >
                        <input
                          data-plasmic-name={"textbox"}
                          data-plasmic-override={overrides.textbox}
                          className={classNames(
                            projectcss.all,
                            projectcss.input,
                            sty.textbox
                          )}
                          onChange={e => {
                            p.generateStateOnChangeProp($state, [
                              "textbox",
                              "value"
                            ])(e.target.value);
                          }}
                          placeholder={"EMAIL ADDRESS"}
                          ref={ref => {
                            $refs["textbox"] = ref;
                          }}
                          size={1}
                          type={"text"}
                          value={
                            p.generateStateValueProp($state, [
                              "textbox",
                              "value"
                            ]) ?? ""
                          }
                        />

                        <input
                          data-plasmic-name={"textbox2"}
                          data-plasmic-override={overrides.textbox2}
                          className={classNames(
                            projectcss.all,
                            projectcss.input,
                            sty.textbox2
                          )}
                          onChange={e => {
                            p.generateStateOnChangeProp($state, [
                              "textbox2",
                              "value"
                            ])(e.target.value);
                          }}
                          placeholder={"PASSWORD"}
                          ref={ref => {
                            $refs["textbox2"] = ref;
                          }}
                          size={1}
                          type={"text"}
                          value={
                            p.generateStateValueProp($state, [
                              "textbox2",
                              "value"
                            ]) ?? ""
                          }
                        />
                      </p.Stack>
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__rxNcE
                        )}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__u5Rid
                            )}
                            role={"img"}
                          />
                        }
                        onClick={async event => {
                          const $steps = {};
                          $steps["runCode"] = true
                            ? (() => {
                                const actionArgs = {
                                  customFunction: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "customFunction",
                                      interactionUuid: "CtUUSRIC4Br",
                                      componentUuid: "E_h4tPgm0Ut",
                                      argName: "customFunction"
                                    },
                                    () => () => {
                                      return (() => {
                                        var xhr = new XMLHttpRequest();
                                        var url =
                                          "https://api.emporix.io/customer/cnetric/login";
                                        var accessToken =
                                          "MI9eGw0yW74rXgj53iuctZus1FY3";
                                        var email = "archana@gmail.com";
                                        var password = "123456789";
                                        var requestBody = JSON.stringify({
                                          email: email,
                                          password: password
                                        });
                                        xhr.open("POST", url, true);
                                        xhr.setRequestHeader(
                                          "Content-Type",
                                          "application/json"
                                        );

                                        xhr.setRequestHeader(
                                          "Authorization",
                                          "Bearer " + accessToken
                                        );

                                        xhr.onload = function () {
                                          if (xhr.status === 200) {
                                            console.log(xhr.responseText);
                                          } else {
                                            console.error(
                                              "Request failed with status:",
                                              xhr.status
                                            );
                                          }
                                        };
                                        xhr.onerror = function () {
                                          console.error(
                                            "Request failed due to a network error"
                                          );
                                        };
                                        return xhr.send(requestBody);
                                      })();
                                    }
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "customFunction",
                                    interactionUuid: "CtUUSRIC4Br",
                                    componentUuid: "E_h4tPgm0Ut"
                                  },
                                  () =>
                                    (({ customFunction }) => {
                                      return customFunction();
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["runCode"] === "object" &&
                            typeof $steps["runCode"].then === "function"
                          ) {
                            $steps["runCode"] = await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "customFunction",
                                interactionUuid: "CtUUSRIC4Br",
                                componentUuid: "E_h4tPgm0Ut"
                              },
                              $steps["runCode"]
                            );
                          }
                          $steps["goToGetAllProducts"] = true
                            ? (() => {
                                const actionArgs = {};
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "navigation",
                                    interactionUuid: "t1am17Mp7v0",
                                    componentUuid: "E_h4tPgm0Ut"
                                  },
                                  () =>
                                    (({ destination }) => {
                                      location.assign(destination);
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["goToGetAllProducts"] === "object" &&
                            typeof $steps["goToGetAllProducts"].then ===
                              "function"
                          ) {
                            $steps["goToGetAllProducts"] =
                              await __wrapUserPromise(
                                {
                                  type: "InteractionLoc",
                                  actionName: "navigation",
                                  interactionUuid: "t1am17Mp7v0",
                                  componentUuid: "E_h4tPgm0Ut"
                                },
                                $steps["goToGetAllProducts"]
                              );
                          }
                          $steps["httpPost"] = true
                            ? (() => {
                                const actionArgs = {
                                  dataOp: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "dataSourceOp",
                                      interactionUuid: "1F1SkUFdxAt",
                                      componentUuid: "E_h4tPgm0Ut",
                                      argName: "dataOp"
                                    },
                                    () => ({
                                      sourceId: "xnTmqefn98vNYbinS53MNK",
                                      opId: "49547af7-4786-4df7-8181-f466e112ea2e",
                                      userArgs: {},
                                      cacheKey: null,
                                      invalidatedKeys: ["plasmic_refresh_all"],
                                      roleId: null
                                    })
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "dataSourceOp",
                                    interactionUuid: "1F1SkUFdxAt",
                                    componentUuid: "E_h4tPgm0Ut"
                                  },
                                  () =>
                                    (async ({ dataOp, continueOnError }) => {
                                      try {
                                        const response =
                                          await executePlasmicDataOp(dataOp, {
                                            userAuthToken:
                                              dataSourcesCtx?.userAuthToken,
                                            user: dataSourcesCtx?.user
                                          });
                                        if (
                                          dataOp.invalidatedKeys &&
                                          dataOp.invalidatedKeys.find(
                                            key => key === "plasmic_refresh_all"
                                          )
                                        ) {
                                          await Promise.all(
                                            Array.from(cache.keys()).map(
                                              async key => mutate(key)
                                            )
                                          );

                                          return response;
                                        }
                                        if (dataOp.invalidatedKeys) {
                                          await Promise.all(
                                            dataOp.invalidatedKeys.map(
                                              async invalidateKey =>
                                                Promise.all(
                                                  Array.from(cache.keys()).map(
                                                    async key => {
                                                      if (
                                                        typeof key ===
                                                          "string" &&
                                                        key.includes(
                                                          `.$.${invalidateKey}.$.`
                                                        )
                                                      ) {
                                                        return mutate(key);
                                                      }
                                                      return Promise.resolve();
                                                    }
                                                  )
                                                )
                                            )
                                          );
                                        }
                                        return response;
                                      } catch (e) {
                                        if (!continueOnError) {
                                          throw e;
                                        }
                                        return e;
                                      }
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["httpPost"] === "object" &&
                            typeof $steps["httpPost"].then === "function"
                          ) {
                            $steps["httpPost"] = await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "dataSourceOp",
                                interactionUuid: "1F1SkUFdxAt",
                                componentUuid: "E_h4tPgm0Ut"
                              },
                              $steps["httpPost"]
                            );
                          }
                        }}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__fCDa
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___2WYno
                          )}
                        >
                          {"Start your account"}
                        </div>
                      </Button2>
                    </p.Stack>
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "foreground", "textbox", "textbox2", "footer"],
  header: ["header"],
  foreground: ["foreground", "textbox", "textbox2"],
  textbox: ["textbox"],
  textbox2: ["textbox2"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <p.PlasmicPageGuard
      minRole={null}
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

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    foreground: makeNodeComponent("foreground"),
    textbox: makeNodeComponent("textbox"),
    textbox2: makeNodeComponent("textbox2"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */