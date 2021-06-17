import Icon from "./icons";

function Social() {
  return (
    <div className="social-link">
      <ul>
        <li className="link">
          <a className="text-gray-500 mylink" href="https://www.facebook.com/Agência-500-Milhas-102975658500673/?ref=pages_you_manage" target="_blank">
            <Icon size={24} icon="facebook" color="none" fill="currentColor" />
          </a>
            <a className="social-link-hover" href="https://www.facebook.com/Agência-500-Milhas-102975658500673/?ref=pages_you_manage" target="_blank">
              Facebook
            </a>
        </li>
        <li className="link">
          <a className="text-gray-500 mylink" href="https://www.instagram.com/agencia500milhas/" target="_blank">
            <Icon size={24} icon="instagram" color="none" fill="none" stroke="currentColor" />
          </a>
            <a className="social-link-hover" href="https://www.instagram.com/agencia500milhas/" target="_blank">
              Instagram
            </a>
        </li>
        <li className="link">
          <a className="text-gray-500 mylink" href="https://api.whatsapp.com/send?phone=554499803500&text=Gostaria%20de%20saber%20mais%20sobre%20o%20marketing%20para%20minha%20empresa" target="_blank">
            <Icon size={24} icon="whatsapp" color="none" fill="currentColor" stroke="none" />
          </a>
          <a className="social-link-hover" href="https://api.whatsapp.com/send?phone=554499803500&text=Gostaria%20de%20saber%20mais%20sobre%20o%20marketing%20para%20minha%20empresa" target="_blank">
            WhatsApp
            </a>
        </li>
      </ul>
    </div>
  );
}
 
export default Social;