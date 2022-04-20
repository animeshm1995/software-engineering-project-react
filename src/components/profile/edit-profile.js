import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as service from "../../services/profile-service";

const EditProfile = () => {
    const [newUser,setNewUser] = useState({});
    const navigate = useNavigate();
    const findMyProfile = () =>
        service.findUserById("my")
            .then(newUser => setNewUser(newUser));
    useEffect(findMyProfile, {});
    const editProfile = () =>
        service.updateUser("my",newUser)
            .then(() => navigate('/profile'))
            .catch(e => alert(e));
    return(
        <div className="ttr-edit-profile">
            <div className="border border-bottom-0">
                <Link to="/profile" className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                    <i className="fa fa-close"></i>
                </Link>
                {/*<Link to="/profile" className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2">
                    Save
                </Link>*/}
                <h4 className="p-2 mb-0 pb-0 fw-bolder">Edit profile</h4>
                <div className="mb-5 position-relative">
                    //todo
                    <img className="w-100" src="../../../public/images/nasa-profile-header.jpg"/>
                    <div className="bottom-0 left-0 position-absolute">
                        <div className="position-relative">
                            <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                                 src="../../../public/images/nasa-3.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={editProfile}>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="username">Username</label>
                    <input id="username" title="Username" readOnly
                           className="p-0 form-control border-0"
                           placeholder="alan" value="alan"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="first-name">First name</label>
                    <input id="first-name" value = {newUser.firstName}
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, firstName: e.target.value})}/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="last-name">Last name</label>
                    <input id="last-name"
                           className="p-0 form-control border-0" value = {newUser.lastName}
                           onChange={(e) =>
                               setNewUser({...newUser, lastName: e.target.value})}
                           placeholder="last-name"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="bio">Bio</label>
                    <textarea  value = {newUser.biography}
                        className="p-0 form-control border-0"
                        id="bio" placeholder="biography" />
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="date-of-birth">Date of birth</label>
                    <input id="date-of-birth"
                           className="p-0 form-control border-0" value = {newUser.dateOfBirth}
                           onChange={(e) =>
                               setNewUser({...newUser, dateOfBirth: e.target.value})}
                           placeholder="date-of-birth"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" value = {newUser.email}
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, email: e.target.value})}
                           type="email" placeholder="email"/>
                </div>
                //todo
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label for="photo">Profile photo</label>
                    <input id="photo"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, profilePhoto: e.target.value})}
                           type="file"/>
                </div>
                //todo
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label for="header">Header image</label>
                    <input id="header"
                           className="p-0 form-control border-0"
                           onChange={(e) =>
                               setNewUser({...newUser, headerImage: e.target.value})}
                           type="file"/>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label for="account" value = {newUser.accountType}>Select account</label>
                    <select
                        className="p-0 form-control border-0"
                        id="account">
                        <option>Personal account</option>
                        <option selected>Academic account</option>
                        onChange={(e) =>
                        setNewUser({...newUser, accountType: e.target.value})}
                    </select>
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    Marital status
                    <input id="married"
                           type="radio" name="marital"/>
                    <label for="married">Married</label>
                    <input id="single" type="radio"
                           checked name="marital"/>
                    <label for="single">Single</label>
                    onChange={(e) =>
                    setNewUser({...newUser, maritalStatus: e.target.value})}
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mb-5">Save></button>
                </div>
            </form></div>
    );
};
export default EditProfile;