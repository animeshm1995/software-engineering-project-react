import React, {useEffect} from "react";
import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import * as service from "../../services/users-service";
import {updateUser} from "../../services/users-service";

const EditProfile = () => {
    const [newUser,setNewUser] = useState({});
    const navigate = useNavigate();
    const findMyProfile = () =>
        service.findUserById("my")
            .then(newUser => setNewUser(newUser));
    useEffect(findMyProfile, []);
    const editProfile = () =>
        service.updateUser("my",newUser)
            .then((user) => navigate('/profile/mytuits'))
            .catch(e => alert(e));
    const deleteProfile = () =>
        service.deleteUser("my")
            .then((user) => navigate('/profile/signup'))
            .catch(e => alert(e));
    return(
        <div className="ttr-edit-profile">
            <div className="border border-bottom-0">
                <Link to="/profile" className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                    <i className="fa fa-close"></i>
                </Link>
                <Link to="/profile" className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2"
                      onClick = {editProfile}>
                    Save
                </Link>
                <h4 className="p-2 mb-0 pb-0 fw-bolder">Edit profile</h4>
                <div className="mb-5 position-relative">
                    <img className="w-100" src="../../../public/images/nasa-profile-header.jpg"/>
                    <div className="bottom-0 left-0 position-absolute">
                        <div className="position-relative">
                            <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                                 src="../../../public/images/nasa-3.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <form action="../../../public/html/profile.html">
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="username">Username</label>
                    <input id="username" title="Username" readOnly
                           className="p-0 form-control border-0"
                           placeholder="alan" value="alan"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="first-name">First name</label>
                    <input id="first-name"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, firstName: e.target.value})}
                           placeholder="first-name" />

                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="last-name">Last name</label>
                    <input id="last-name"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, lastName: e.target.value})}
                           placeholder="last-name"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        className="p-0 form-control border-0"
                        id="bio"></textarea>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="date-of-birth">Date of birth</label>
                    <input id="date-of-birth"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, dateOfBirth: e.target.value})}
                           placeholder="date-of-birth"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, email: e.target.value})}
                           type="email" placeholder="email"/>
                </div>{/*
            <div className="border border-secondary rounded-3 p-2 mb-3">
              <label htmlFor="password">Reset password</label>
              <input id="password"
                     className="p-0 form-control border-0"
                     type="password"/>
            </div>*/}
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label for="photo">Profile photo</label>
                    <input id="photo"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, profilePhoto: e.target.value})}
                           type="file" placeholder="photo"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label for="header">Header image</label>
                    <input id="header"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, headerImage: e.target.value})}
                           type="file" placeholder="photo"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label for="account">Select account</label>
                    <select
                        className="p-0 form-control border-0"
                        id="account">
                        <option>PERSONAL</option>
                        <option>ACADEMIC</option>
                        <option>PROFESSIONAL</option>
                        onChange={(e) =>
                        setNewUser({...newUser, accountType: e.target.value})}
                    </select>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    Marital status
                    <input id="MARRIED"
                           type="radio" name="maritalStatus"/>
                    <label for="MARRIED">Married</label>
                    <input id="SINGLE" type="radio"
                           checked name="maritalStatus"/>
                    <label for="SINGLE">Single</label>
                    <input id="WIDOWED" type="radio"
                           checked name="maritalStatus"/>
                    <label for="WIDOWED">WIDOWED</label>
                    onChange={(e) =>
                    setNewUser({...newUser, maritalStatus: e.target.value})}
                </div>
                <button onClick={editProfile}
                        className="btn btn-primary mb-5">Save
                </button>
                <button onClick={deleteProfile}
                        className="btn btn-primary mb-5">Delete Profile
                </button>
            </form>
        </div>
    );
};
export default EditProfile;