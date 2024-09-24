import { Links } from "./Links/Links";
export const AppRender = () => {
	return (
		<section>
			<div className="container">
				<div className="content">
					<Links
						href="https://example.com"
						type="link-class"
						chil={<span>Ссылка</span>}
					/>
				</div>
			</div>
		</section>
	);
};
