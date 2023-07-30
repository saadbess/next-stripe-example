import React from 'react';

const NavBar: React.FC = () => {
	return (
		<nav id="header" className="w-full z-30 top-0 py-1 bg-[#CEE6F3]">
			<div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-6 py-3">
				<a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-[#333333] text-xl " href="#">
					<svg className="fill-current text-[#333333] mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M17 24h-10l-2-14h14l-2 14zm-.592-10h-8.816l.571 4h7.674l.571-4zm1.631-8c0 .922 1.092 1.618 1.961 1.618v1.382h-16v-1.382c.87 0 2-.697 2-1.618h12.039zm-7.73-.691c2.819-2.143-.594-2.353.077-3.868-2.361 2.113.85 2.169-.077 3.868zm2.486-.001c4.236-3.238-.877-3.067.105-5.308-3.382 2.895 1.259 2.959-.105 5.308z" /></svg>
					<p>HAPPY SAAD COFFEE</p>
				</a>
			</div>
		</nav>
	)
}

export default NavBar;
