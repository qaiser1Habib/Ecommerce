import  { Fragment, useState } from "react";
import BreakCrump from "./partials/breadCrumb";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const editProfile = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const pictureImageTxt = "Choose an image";

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;

        setImageSrc(readerTarget.result);
      });

      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [spinner, SetSpinner] = useState("off");


  
  const handleSubmit = (e) => {
    e.preventDefault();

    SetSpinner("on");

    setTimeout(() => {
      SetSpinner("off");
      // navigate("/admin-panel/dashboard");
    }, 1000);
  };

  return (
    <Fragment>
      <BreakCrump
        profileEditBtns={true}
        chagnePasswordEditBtns={true}
        pageNames={["Edit Profile"]}
      />

      <div
        id="kt_content_container"
        className="mt-5 d-flex flex-column-fluid align-items-start container-xxl"
      >
        {/*begin::Post*/}
        <div className="content mt-5 flex-row-fluid" id="kt_content">
          {/*begin::Navbar*/}
          <div className="card mb-5 mb-xl-10">
            <div className="card-body pt-9 pb-0">
              <div className="card-header cursor-pointer">
                {/*begin::Card title*/}
                <div className="card-title m-0">
                  <h3 className="fw-bold m-0">Edit Profile Details</h3>
                </div>
                {/*end::Action*/}
              </div>
              {/*begin::Navs*/}

              {/*begin::Navs*/}
              {/*begin::Form*/}
              <form
                action=""
                method="post"
                encType="multipart/form-data"
                className="form"
                onSubmit={handleSubmit}
              >
                {/*begin::Card body*/}
                <div className="card-body border-top p-9">
                  {/*begin::Input group*/}
                  <div className="row mb-6">
                    {/*begin::Label*/}
                    <label className="col-lg-4 col-form-label fw-bold fs-6">
                      Profile Picture
                    </label>
                    {/*end::Label*/}
                    {/*begin::Col*/}
                    <div className="col-6 col-md-2">
                      {/*begin::Image input*/}
                      <div>
                        <label className="picture" tabIndex="0">
                          <span className="picture__image">
                            {imageSrc ? (
                              <img
                                src={imageSrc}
                                alt="Uploaded Image"
                                className="picture__img"
                              />
                            ) : (
                              pictureImageTxt
                            )}
                          </span>
                          <input
                            type="file"
                            name="picture__input"
                            id="picture__input"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>

                      <div className="form-text">
                        Allowed file types: png, jpg, jpeg.
                      </div>
                      {/*end::Hint*/}
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="row mb-6">
                    {/*begin::Label*/}
                    <label className="col-lg-4 col-form-label required fw-bold fs-6">
                      Full Name
                    </label>
                    {/*end::Label*/}
                    {/*begin::Col*/}
                    <div className="col-lg-8">
                      {/*begin::Row*/}
                      <div className="row">
                        {/*begin::Col*/}
                        <div className="col-lg-6 fv-row">
                          <input
                            type="text"
                            name="f_name"
                            className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                            placeholder="First name"
                            required=""
                          />
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-lg-6 fv-row">
                          <input
                            type="text"
                            name="l_name"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Last name"
                            required=""
                          />
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Row*/}
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="row mb-6">
                    {/*begin::Label*/}
                    <label className="col-lg-4 col-form-label required fw-bold fs-6">
                      Username
                    </label>
                    {/*end::Label*/}
                    {/*begin::Col*/}
                    <div className="col-lg-8 fv-row">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Username"
                        required=""
                      />
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="row mb-6">
                    {/*begin::Label*/}
                    <label className="col-lg-4 col-form-label required fw-bold fs-6">
                      Email
                    </label>
                    {/*end::Label*/}
                    {/*begin::Col*/}
                    <div className="col-lg-8 fv-row">
                      <input
                        type="text"
                        name="email"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="row mb-6">
                    {/*begin::Label*/}
                    <label className="col-lg-4 col-form-label fw-bold fs-6">
                      <span className="required">Contact Phone</span>
                      <i
                        className="fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Phone number must be active"
                        aria-label="Phone number must be active"
                      />
                    </label>
                    {/*end::Label*/}
                    {/*begin::Col*/}
                    <div className="col-lg-8 fv-row">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Phone number"
                        required=""
                      />
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="row mb-6">
                    {/*begin::Label*/}
                    <label
                      htmlFor="country"
                      className="col-lg-4 col-form-label fw-bold fs-6"
                    >
                      <span className="required">Country</span>
                      <i
                        className="fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Country of origination"
                        aria-label="Country of origination"
                      />
                    </label>
                    {/*end::Label*/}
                    {/*begin::Col*/}
                    <div className="col-lg-8 fv-row">
                      <div>
                        <select
                          id="country"
                          name="country"
                          className="form-control form-control-lg form-control-solid"
                          value={selectedCountry}
                          onChange={handleChange}
                        >
                          <option value="">Select a country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Input group*/}
                </div>
                {/*end::Card body*/}
                {/*begin::Actions*/}
                <div className="card-footer d-flex justify-content-end py-6 px-9">
                  {/*begin::Submit button*/}
                  <button
                    type="submit"
                    id="submit_btn"
                    className="btn btn-lg fw-bolder change-btn btn-primary w-100 mb-5"
                    name="edit_user_profile"
                    disabled={spinner === "on"}
                    data-kt-indicator={spinner}
                  >
                    <span className="indicator-label">Save Changes</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                  {/*end::Submit button*/}
                </div>
                {/*end::Actions*/}
              </form>
              {/*end::Form*/}
            </div>
          </div>
          {/*end::Navbar*/}
        </div>
        {/*end::Post*/}
      </div>
    </Fragment>
  );
};

export default editProfile;
