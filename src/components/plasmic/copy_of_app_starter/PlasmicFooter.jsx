// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dXyvLu7j1Po85PHwR2Uoy6
// Component: 0oRBHM_nRQ2h
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button2 from "../../Button2"; // plasmic-import: OykjTNwBMTc/component
import { useScreenVariants as useScreenVariantspRlysB5IYetu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PRlysB5iYETU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_copy_of_app_starter.module.css"; // plasmic-import: dXyvLu7j1Po85PHwR2Uoy6/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 0oRBHM_nRQ2h/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: NsUyZTGzS_UE/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: fPFeR0cUxtTp/icon
import amercareLogopngCPupovUrnpaJ from "./images/amercareLogopng.png"; // plasmic-import: cPupovUrnpaJ/picture

createPlasmicElementProxy;

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooter__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspRlysB5IYetu()
  });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <div className={classNames(projectcss.all, sty.column__cj0Mg)}>
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"92px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: amercareLogopngCPupovUrnpaJ,
            fullWidth: 339,
            fullHeight: 127,
            aspectRatio: undefined
          }}
        />
      </div>
      <div className={classNames(projectcss.all, sty.column__j5Rj)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mwb65)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nb0Ff
            )}
          >
            {"GET TO KNOW US"}
          </div>
          <Button2
            className={classNames("__wab_instance", sty.button2__rJlH)}
            color={"clear"}
            endIcon={
              <Icon38Icon
                className={classNames(projectcss.all, sty.svg__plPTq)}
                role={"img"}
              />
            }
            size={"minimal"}
            startIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg___1CftF)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8Drlh
              )}
            >
              {"About Us"}
            </div>
          </Button2>
          <Button2
            className={classNames("__wab_instance", sty.button2__jtUx)}
            color={"clear"}
            endIcon={
              <Icon38Icon
                className={classNames(projectcss.all, sty.svg__ya86H)}
                role={"img"}
              />
            }
            size={"minimal"}
            startIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__bzSke)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mlXgY
              )}
            >
              {"Work With AmerCareRoyal"}
            </div>
          </Button2>
          <Button2
            className={classNames("__wab_instance", sty.button2__vWbi7)}
            color={"clear"}
            endIcon={
              <Icon38Icon
                className={classNames(projectcss.all, sty.svg__otg1M)}
                role={"img"}
              />
            }
            size={"minimal"}
            startIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__yQsY)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zR9Qc
              )}
            >
              {"Videos"}
            </div>
          </Button2>
          <Button2
            className={classNames("__wab_instance", sty.button2__nhCb5)}
            color={"clear"}
            endIcon={
              <Icon38Icon
                className={classNames(projectcss.all, sty.svg__pujZ)}
                role={"img"}
              />
            }
            size={"minimal"}
            startIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__ixJtS)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tacJi
              )}
            >
              {"Company News"}
            </div>
          </Button2>
          <Button2
            className={classNames("__wab_instance", sty.button2___2Jyxc)}
            color={"clear"}
            endIcon={
              <Icon38Icon
                className={classNames(projectcss.all, sty.svg__wyuQm)}
                role={"img"}
              />
            }
            size={"minimal"}
            startIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__lXn3R)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rejs2
              )}
            >
              {"Our Team"}
            </div>
          </Button2>
          <Button2
            className={classNames("__wab_instance", sty.button2__lukKd)}
            color={"clear"}
            endIcon={
              <Icon38Icon
                className={classNames(projectcss.all, sty.svg___0YtvZ)}
                role={"img"}
              />
            }
            size={"minimal"}
            startIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg___8ODtm)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__g8Ypq
              )}
            >
              {"Careers"}
            </div>
          </Button2>
        </p.Stack>
      </div>
      <div className={classNames(projectcss.all, sty.column__xdHDa)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__cot1J)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cHWwu
            )}
          >
            {"DISTRIBUTION POINTS"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sXMp
            )}
          >
            {"PENNSYLVANIA\n420 Clover Mill Rd\nExton, PA 19341"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uXnj
            )}
          >
            {"TEXAS\n2401 Petty Pl\nFort Worth, TX 76177"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___6BfXw
            )}
          >
            {" \nSOUTH CAROLINA\n1334 Drop Off Dr\nSummerville, SC 29486"}
          </div>
        </p.Stack>
      </div>
      <div className={classNames(projectcss.all, sty.column__c0K6)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___47Oj)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___9Slge
            )}
          >
            {"CONTACT"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7Swol
            )}
          >
            {"CUSTOMER CARE"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wsPjb
            )}
          >
            {
              "Call Us at 800-666-6655\r\nhello@amercareroyal.com\r\nOr Contact Us Online"
            }
          </div>
        </p.Stack>
        <Button2
          className={classNames("__wab_instance", sty.button2__vBg3K)}
          color={"clear"}
          endIcon={
            <Icon38Icon
              className={classNames(projectcss.all, sty.svg___9ZcM)}
              role={"img"}
            />
          }
          size={"minimal"}
          startIcon={
            <ChecksvgIcon
              className={classNames(projectcss.all, sty.svg__i4EQo)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aaunw
            )}
          >
            {"Privacy Policy"}
          </div>
        </Button2>
        <Button2
          className={classNames("__wab_instance", sty.button2___3AhmX)}
          color={"clear"}
          endIcon={
            <Icon38Icon
              className={classNames(projectcss.all, sty.svg__oIk5S)}
              role={"img"}
            />
          }
          size={"minimal"}
          startIcon={
            <ChecksvgIcon
              className={classNames(projectcss.all, sty.svg___6JoLk)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___0SnWl
            )}
          >
            {"Terms and Conditions"}
          </div>
        </Button2>
        <Button2
          className={classNames("__wab_instance", sty.button2__kvKya)}
          color={"clear"}
          endIcon={
            <Icon38Icon
              className={classNames(projectcss.all, sty.svg__lgC26)}
              role={"img"}
            />
          }
          size={"minimal"}
          startIcon={
            <ChecksvgIcon
              className={classNames(projectcss.all, sty.svg__sYAu)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qVbR1
            )}
          >
            {"Work With AmerCareRoyal"}
          </div>
        </Button2>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
