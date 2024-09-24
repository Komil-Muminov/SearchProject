import React, { Children, ReactNode } from "react";

import { FC } from "react";

export interface LinksType {
	href: string | undefined;
	type: string;
	chil: ReactNode;
	disabled: boolean;
}

export const Links: FC<LinksType> = ({ href, type, chil, disabled }) => {
	return (
		<a href={href} className={`${type}`}>
			{chil}
		</a>
	);
};
