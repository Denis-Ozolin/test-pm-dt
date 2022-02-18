import FooterOptions from './FooterOptions';
import Social from './Social';
import Copyright from './Copyright';
import otherOptions from '../../settings/otherOptions.json';
import collaboration from '../../settings/collaboration.json';
import css from './Footer.module.css';

function Footer() {
  return (
    <div className={css.bgContainer}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.optionContainer}>
            <FooterOptions options={otherOptions} />
            <FooterOptions options={collaboration} />
            <Social />
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default Footer;
