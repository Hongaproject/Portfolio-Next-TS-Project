
export default function Footer() {
    
    return(    
        <div>
            <footer className="text-gray-600 body-font">
                <div className="bg-gray-100">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                       
                        <span className="ml-3 text-xl"></span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 HSW All Rights Reserved.
                        {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
                    </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}