"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const component_1 = __importDefault(require("./component"));
const styled_1 = require("./styled");
const styled_2 = require("../styled");
const Trigger = ({ text, isOpen }) => (<styled_2.ItemWrapper>
    {text}
    <styled_2.ArrowIcon src="/images/icons/ic-down-arrow.svg" alt="ic-down-arrow" isOpen={isOpen}/>
  </styled_2.ItemWrapper>);
const Dropdown = ({ data, t, indx, isMobile }) => {
    const outerRef = (0, react_1.useRef)(null);
    const innerRef = (0, react_1.useRef)(null);
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const [maxHeight, setMaxHeight] = (0, react_1.useState)(0);
    const handleBlur = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    (0, react_1.useEffect)(() => {
        const node = outerRef.current;
        const handleEvent = (event) => {
            const isNodeChild = node?.contains(event.target);
            if (isNodeChild)
                return;
            handleBlur();
        };
        document.addEventListener('click', handleEvent);
        document.addEventListener('scroll', handleBlur);
        return () => {
            document.removeEventListener('click', handleEvent);
            document.removeEventListener('scroll', handleBlur);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (isOpen) {
            const maxHeight = innerRef.current?.scrollHeight || 0;
            setMaxHeight(maxHeight);
            return;
        }
        setMaxHeight(0);
    }, [isOpen]);
    return (<styled_1.DropdownOuter ref={outerRef}>
      <div onClick={handleClick}>
        <Trigger text={t(data.text)} isOpen={isOpen}/>
      </div>
      <styled_1.DropdownWrapper>
        <styled_1.DropdownInner ref={innerRef} maxHeight={maxHeight} isOpen={isOpen}>
          <component_1.default data={data} t={t} indx={indx} isMobile={isMobile}/>
        </styled_1.DropdownInner>
      </styled_1.DropdownWrapper>
    </styled_1.DropdownOuter>);
};
exports.default = Dropdown;
