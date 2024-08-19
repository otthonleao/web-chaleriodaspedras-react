import { ProfileCircle } from "../app/components/profile/circle"
import "../app/components/linktree/styles.css"

export default function Linktree() {
	return (

		<div className="flex flex-col min-h-screen">

			<div className="flex flex-col flex-grow w-full py-10 items-center justify-center">
				<ProfileCircle url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6Z0aC1OkyAiP0-6r1DXl0UCec6JxY8_luA&s" title="logomarca da Ótica Alemã" />
				<h1 className="md:text-4xl text-3xl font-bold text-white mt-5">Chalé Rio das Pedras ⛺️</h1>
				<span className="text-gray-50 mb-5 mt-1">Slogan ou alguma frase pousada em Chapecó</span>

				<main className="flex flex-col w-11/12 max-w-xl text-center items-center">

					<section className="bg-green-400 mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="https://api.whatsapp.com/message/SV2K3XA624WFL1?autoload=1&app_absent=0" rel="noopener noreferrer">
							<p className="text-black text-base md:text-lg">Whatsapp</p>
						</a>
					</section>
					<section className="bg-gray-200 mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="/" target="_blank">
							<p className="text-black text-base md:text-lg">🖥️ Visite nossa página</p>
						</a>
					</section>
					<section className="bg-blue-400  mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="https://www.facebook.com/OticaAlema" rel="noopener noreferrer" target="_blank">
							<p className="text-black text-base md:text-lg">Facebook</p>
						</a>
					</section>
					<section className="bg-red-400  mb-4 w-11/12 py-3 font-bold rounded-lg select-none transition-transform hover:scale-105">
						<a href="https://www.instagram.com/chaleriodaspedrascco/" rel="noopener noreferrer" target="_blank">
							<p className="text-black text-base md:text-lg">Instagram</p>
						</a>
					</section>

					<section className="w-11/12">
						<h3 className="text-left mb-1 text-white">📍 Nosso Endereço</h3>
						<iframe
							className="rounded-lg transition-all duration-300 hover:ring-4 hover:ring-blue-500 focus:ring-4 focus:ring-blue-500"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15935.402810076008!2d-60.021954!3d-3.1341207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c059211b3b8f1%3A0x85d56381c87a7a7e!2zw5N0aWNhIEFsZW3Dow!5e0!3m2!1spt-BR!2sbr!4v1723877988615!5m2!1spt-BR!2sbr"
							width="100%"
							height="50%"
							loading="lazy"
						></iframe>
						<p className="text-sm py-2 text-white">
							Rua Henrique Martins, 470 - Centro. Manaus - AM, 69010-010
						</p>
					</section>


				</main>
			</div>

			<footer className="bottom-0 w-screen flex justify-center text-center">
				<p className="bg-gray-900 text-gray-500
				 w-screen py-3 px-3 text-xs">
					<span className="font-bold">© 2024
						<a href="https://github.com/otthonleao" rel="noopener noreferrer" target="_blank"> Muraton Software</a>
					</span> | development by
					<a href="https://github.com/otthonleao" rel="noopener noreferrer" target="_blank"> Otthon Leão 🧑‍💻</a></p>
			</footer>
		</div>
	)
}
