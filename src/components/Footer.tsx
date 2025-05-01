import { communityLinks, platformLinks } from "../constanst";

const Footer = () => {
 return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">
                ASONIPED
            </h2>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">
                Información de Contacto
            </h3>
            <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                <li key={index}>
                    <a
                    className="text-neutral-300 hover:text-white" 
                    href={link.href}>{link.text}</a>
                </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">
                Redes Sociales
            </h3>
            <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                <li key={index}>
                    <a
                    className="text-neutral-300 hover:text-white" 
                    href={link.href}>{link.text}</a>
                </li>
                ))}
            </ul>
          </div>
        </div>
    </footer>
 )
}

export default Footer;