interface AcomodacaoLinktreeProps {
	url: string;
	title?: string;
	description?: string;
}

export function Acomodacao({ url, title, description }: AcomodacaoLinktreeProps) {
	return (
		<>
			<a className="flex flex-col select-none transition-transform hover:scale-105" href="#" rel="noopener noreferrer">
				<img
					src={url}
					alt={description}
					className="rounded-lg w-full aspect-square object-cover"
				/>
				<p className="text-white flex justify-center mt-1">{title}</p>
			</a>
		</>

	)
}
