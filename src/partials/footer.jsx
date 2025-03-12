import "./footer.css"
export function Footer() {
  const phoneNumber = '+91 12345 67890 /232323223';

  const handleClick = () => {
    // Copy the phone number to the clipboard
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        console.log('Phone number copied to clipboard: ' + phoneNumber);

        // Open the phone app with the phone number
        window.location.href = `tel:${phoneNumber.split(' /')[0]}`; // Handle the first phone number only
      })
      .catch((err) => {
        console.error('Error copying text to clipboard: ', err);
      });
  }
  // go email 
  const email = 'sdsds@sds.sd';

  const goemail = () => {
    // Copy the email to the clipboard
    navigator.clipboard.writeText(email)
      .then(() => {
        console.log('Email copied to clipboard: ' + email);

        // Open the default email client with the "mailto:" link
        window.location.href = `mailto:${email}`;
      })
      .catch((err) => {
        console.error('Error copying text to clipboard: ', err);
      });
  };
  return <>
    <div className="footer-main">
      <div className="content-threeclass">
        <div className="first">
          <img className="rvlogo-footer" src="/Rvlogo.png" alt="" />
          <h2>More Creation, More Possibilities</h2>
        </div>
        <div className="first">
          <h2>Contect Information</h2>
          <i class="fa-solid fa-phone" onClick={handleClick}><span>{phoneNumber}</span></i>
          <i class="fa-solid fa-envelope" onClick={goemail}><span>{email}</span></i>
          <i class="fa-solid fa-location-dot"><span >40 ,nand bunglows , mota varacha ,surat</span></i>
        </div>
                         <div className="second first">
                     <h2>Social media</h2>
                     <a href="#"><i class="fa-brands fa-instagram"><span>Instagram account</span></i></a>
                 </div>
                 <h1 class="copyright">All Rights Reserved By &copy; Yash Vaghasiya 2025</h1>

      </div>
    </div>
  </>
}
//  <div className="home-details">
//             <div className="contect">
//                 <div className="logo-footer">
//                     <img src="/public/Rvlogo.png" alt="" />
//                     <h2>More Creation, More Possibilities</h2>
//                 </div>
//                 <div className="first">
//                     <h2>Contect Information</h2>
//                     <i class="fa-solid fa-phone" onClick={handleClick}><span>{phoneNumber}</span></i>
//                     <i class="fa-solid fa-envelope" onClick={goemail}><span>{email}</span></i>
//                     <i class="fa-solid fa-location-dot"><span >40 ,nand bunglows , mota varacha ,surat</span></i>
//                 </div>
//                 <div className="second first">
//                     <h2>Social media</h2>
//                     <a href="#"><i class="fa-brands fa-instagram"><span>Instagram account</span></i></a>
//                 </div>
//             </div>
//             <div className="tag"></div>
//         </div>