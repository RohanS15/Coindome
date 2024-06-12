import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__socials">
            <IconBrandTwitter className="footer-icon" />
            <IconBrandDiscord className="footer-icon" />
            <IconBrandFacebook className="footer-icon" />
            <IconBrandYoutube className="footer-icon" />
          </div>
          <div className="footer-content__text">
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
          <div className="footer-content__text">
            <p>&#169; bzydome. All rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
