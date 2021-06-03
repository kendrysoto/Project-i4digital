import React, { ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/AsyncActions";
import "../style/style.css";

interface UserProps {
  user?: any;
  DataUser: any;
  fetchUser: any;
}

const User = ({ DataUser, fetchUser }: UserProps): ReactElement => {
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(evt: any) {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div className="form-filter">
        <h3>Filter Users</h3>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Name"
            aria-label="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <input
            className="form-control me-2"
            type="email"
            placeholder="Email"
            aria-label="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <input
            className="form-control me-2"
            type="text"
            placeholder="Website"
            aria-label="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </form>
      </div>
      <section id="seccion3" className="fila">
        {DataUser &&
          DataUser.filter((val: any) => {
            if (search == "") {
              return val;
            } else if (
              val.name.toLocaleLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            } else if (
              val.email.toLocaleLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            } else if (
              val.website.toLocaleLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          }).map((userL: any) => (
            <div
              key={userL.id}
              className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            >
              <div>
                <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                <h2>{userL.name}</h2>
                <p>Email: {userL.email}</p>
                <p>Website: {userL.website}</p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

const mapStatetoProps = (state: UserProps) => {
  return {
    DataUser: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(User);
