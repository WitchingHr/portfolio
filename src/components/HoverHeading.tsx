import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useState,
} from "react";

interface HoverHeadingProps {
	sub: string;
	fn: () => void;
}

const HoverHeading: FC<PropsWithChildren<HoverHeadingProps>> = ({
	sub,
	fn,
	children,
}) => {
	const [active, setActive] = useState<boolean>(false);

	const handleClick = () => {
		setActive(true);
    setTimeout(() => {
      fn();
    }, 1000);
	};

	return (
		<div
			role="button"
			tabIndex={0}
			onClick={handleClick}
			className={
				`cursor-pointer hover-heading ` + (active === true && "blur-out")
			}
		>
			<h1 className="text-6xl font-bold" data-replace={children}>
				<span>{children}</span>
			</h1>
			<h2 className="text-2xl duration-500 hover-blur gradient">{sub}</h2>
		</div>
	);
};

export default HoverHeading;
