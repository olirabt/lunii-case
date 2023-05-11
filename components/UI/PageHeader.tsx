type Props = {
	header: string;
};

const PageHeader: React.FC<Props> = ({ header }) => {
	return (
		<h1 className="bold mb-4 text-neutral0 text-md">
			{header}
		</h1>
	);
};

export default PageHeader;