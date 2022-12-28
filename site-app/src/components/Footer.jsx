/**
 * @description The footer for the site which contains static links contact information
 * and other pertinent data.
 *
 */

const Footer = () => {
  return (
    <>
      <div className='footer flex-row '>
        <div className='auto-center'>
          <p className='tag'>powered by Ogres</p>
          <p className='tag'>
            <a href='https://www.freepik.com/free-vector/cloud-background-seamless-chinese-oriental-pattern-vector_18705022.htm#query=oni%20mask&position=1&from_view=keyword'>
              Image by rawpixel.com
            </a>{" "}
            on Freepik
          </p>
          <p className='tag'>
            <a href='https://www.freepik.com/free-vector/japanese-samurai-black-mask-flat-image-japan-traditional-vintage-warrior-fighter-clipart-isolated-vector-illustration_11236138.htm#query=oni%20mask&position=9&from_view=keyword'>
              Image by pch.vector
            </a>{" "}
            on Freepik
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
