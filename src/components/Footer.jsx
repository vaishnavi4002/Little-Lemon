const Footer = () => {
    return (
      <div>
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">About</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Brand Center</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Discord Server</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">iOS</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Windows</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">MacOS</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.109 4.109 0 0 0 3.834 2.848A8.28 8.28 0 0 1 0 14.52a11.7 11.7 0 0 0 6.29 1.835A11.667 11.667 0 0 0 17.992 4.62c0-.18 0-.355-.014-.53A8.348 8.348 0 0 0 20 1.892Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 20">
                    <path fillRule="evenodd" d="M15.68 0H8.316C1.927 0 .032 2.003.032 8.278v3.444C.032 17.496 1.927 19.5 8.317 19.5H15.68c6.39 0 8.285-2.003 8.285-7.278V8.278C23.965 2.003 22.07 0 15.68 0Zm2.926 9.526-5.59 3.68a1.704 1.704 0 0 1-1.85 0l-5.59-3.68a.83.83 0 0 1 0-1.382l5.59-3.673a1.705 1.705 0 0 1 1.85 0l5.59 3.673a.83.83 0 0 1 0 1.382Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.286-.012-1.237-.017-2.243-3.338.725-4.042-1.61-4.042-1.61-.545-1.385-1.33-1.755-1.33-1.755-1.087-.744.082-.729.082-.729 1.202.085 1.835 1.235 1.835 1.235 1.07 1.834 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.467-2.38 1.236-3.22-.124-.302-.536-1.52.118-3.166 0 0 1.008-.323 3.303 1.23a11.52 11.52 0 0 1 6.005 0C18.967 5.022 19.975 5.346 19.975 5.346c.655 1.647.243 2.865.12 3.166a4.513 4.513 0 0 1 1.237 3.22c0 4.607-2.807 5.625-5.48 5.92.43.373.815 1.11.815 2.236 0 1.617-.015 2.923-.015 3.323 0 .32.215.695.825.577C20.565 21.8 24 17.303 24 12 24 5.372 18.627 0 12 0Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  