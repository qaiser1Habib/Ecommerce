import React, { useState, Fragment } from "react";
import BreakCrump from "../../components/adminPanel/general/breadCrumb";

const changePassword = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    old_password: false,
    new_password: false,
    confirm_password: false,
  });

  const handleClick = (inputKey) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [inputKey]: !prevState[inputKey],
    }));
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
        editProfileBtns={true}
        pageNames={["Change Password"]}
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
                  <h3 className="fw-bold m-0">Change Password</h3>
                </div>
                {/*end::Action*/}
              </div>
              <form
                action="action.php"
                method="post"
                encType="multipart/form-data"
                className="form"
                onSubmit={handleSubmit}
              >
                {/*begin::Card body*/}
                <div className="card-body border-top p-9">
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack mb-2">
                      {/*begin::Label*/}
                      <label className="form-label fw-bolder text-dark fs-6 mb-0">
                        Old Password
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Input*/}
                    <div className="position-relative mb-3">
                      <input
                        id="old_password"
                        className="form-control form-control-lg form-control-solid"
                        type={
                          passwordVisibility.old_password ? "text" : "password"
                        }
                        placeholder=""
                        name="old_password"
                        autoComplete="off"
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title="Password must consist atleast 8 characters,atleast one uppercase,atleast one lowercase letter,atleast one number digit,atleast one special charachter"
                        required=""
                      />
                      <span
                        className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                        data-kt-password-meter-control="visibility"
                        id="old_password_btn"
                      >
                        <i
                          onClick={() => handleClick("old_password")}
                          className={`toggle-password bi ${
                            passwordVisibility.old_password
                              ? "bi-eye"
                              : "bi-eye-slash"
                          } fs-2`}
                        />
                      </span>
                    </div>
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack mb-2">
                      {/*begin::Label*/}
                      <label className="form-label fw-bolder text-dark fs-6 mb-0">
                        New Password
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Input*/}
                    <div className="position-relative mb-3">
                      <input
                        id="new_password"
                        className="form-control form-control-lg form-control-solid"
                        type={
                          passwordVisibility.new_password ? "text" : "password"
                        }
                        placeholder=""
                        name="new_password"
                        autoComplete="off"
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title="Password must consist atleast 8 characters,atleast one uppercase,atleast one lowercase letter,atleast one number digit,atleast one special charachter"
                        required=""
                      />
                      <span
                        className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                        data-kt-password-meter-control="visibility"
                        id="new_password_btn"
                      >
                        <i
                          onClick={() => handleClick("new_password")}
                          className={`toggle-password bi ${
                            passwordVisibility.new_password
                              ? "bi-eye"
                              : "bi-eye-slash"
                          } fs-2`}
                        />
                      </span>
                    </div>
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack mb-2">
                      {/*begin::Label*/}
                      <label className="form-label fw-bolder text-dark fs-6 mb-0">
                        Confrim Password
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Input*/}
                    <div className="position-relative mb-3">
                      <input
                        id="confirm_password"
                        className="form-control form-control-lg form-control-solid"
                        type={
                          passwordVisibility.confirm_password
                            ? "text"
                            : "password"
                        }
                        placeholder=""
                        name="confirm_password"
                        autoComplete="off"
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title="Password must consist atleast 8 characters,atleast one uppercase,atleast one lowercase letter,atleast one number digit,atleast one special charachter"
                        required=""
                      />
                      <span
                        className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                        data-kt-password-meter-control="visibility"
                        id="confirm_password_btn"
                      >
                        <i
                          onClick={() => handleClick("confirm_password")}
                          className={`toggle-password bi ${
                            passwordVisibility.confirm_password
                              ? "bi-eye"
                              : "bi-eye-slash"
                          } fs-2`}
                        />
                      </span>
                    </div>
                    {/*end::Input*/}
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
                    className="btn fw-bolder change-btn btn-lg btn-primary w-100 mb-5"
                    name="edit_password"
                    disabled={spinner === "on"}
                    data-kt-indicator={spinner}
                  >
                    <span className="indicator-label">Update Password</span>
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

export default changePassword;
