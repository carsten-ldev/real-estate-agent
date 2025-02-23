import { ReactNode } from "react";


export default function FooterIconGroup({ icon, smallText, bigText }: {icon: ReactNode, smallText: string, bigText: string}) {


    return (
        <div className="grid grid-cols-[3.75rem_1fr] gap-3 mb-7">
			<div className="rounded-full w-[3.75rem] h-[3.75rem] bg-primary text-white flex justify-center items-center">{icon}</div>
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