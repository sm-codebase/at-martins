import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import NavLogo from '../public/assets/navLogo.svg'



function Footer() {
	return (
		<>
			<div className="bg-[#001E47] h-1/2 w-full sm:mt-24 flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<a>
            				<Image
              					src={NavLogo}
              					alt='/'
              					width='170'
              					height='70'
              					className='cursor-pointer'
            				/>
          				</a>
						<div className="flex justify-center gap-6 pb-5">
							<FaInstagram className="text-2xl text-white cursor-pointer hover:text-gray-300" />
							<FaFacebook className="text-2xl text-white cursor-pointer hover:text-gray-300" />
							<FaWhatsapp className="text-2xl text-white cursor-pointer hover:text-gray-300" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Serviços</p>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Manutenção industrial
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Caldeiraria
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Mutual Funds
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Sobre nós</p>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Quem Somos
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Nossos Serviços
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Clientes
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contatos
						</li>
					</ul>
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h3 className=" text-gray-800 font-semibold">
					© 2022 Todos os direitos reservados | Desenvolvido ❤ pela{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Sousas Midia{" "}
					</span>
				</h3>
			</div>
		</>
	);
}

export default Footer;