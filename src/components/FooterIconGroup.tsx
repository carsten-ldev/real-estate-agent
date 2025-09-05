import { ReactNode } from "react";

type FooterIconGroupProps = {
	icon: ReactNode;
	smallText: string;
	bigText: string;
};

export default function FooterIconGroup({ icon, smallText, bigText }: FooterIconGroupProps) {


    return (
        <div className="grid grid-cols-[3.75rem_1fr] gap-3 mb-7">
			<div className="rounded-full w-15 h-15 bg-primary text-white flex justify-center items-center">{icon}</div>
			<div className="self-center">
				<p className="text-sm">
					{smallText}
				</p>
				<p className="text-lg">
					{bigText}
				</p>
			</div>
		</div>
    )
}