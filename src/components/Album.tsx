import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { fetcAlbum } from "../redux/AsyncActions";
import "../style/style.css";

interface AlbunProps {
  album?: any;
  loading?: boolean;
  error?: any;
  DataAlbum: any;
  fetcAlbum: any;
}

const Album = ({
  DataAlbum,
  fetcAlbum,
}: AlbunProps): ReactElement => {
  useEffect(() => {
    fetcAlbum();
  }, []);

  return (
    <div>
      <section id="seccion3" className="fila">
        {DataAlbum &&
          DataAlbum.map((albumL: any) => (
            <div
              key={albumL.id}
              className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            >
              <div>
                <img src="https://edit.org/img/blog/how-caratulas-de-discos.jpg" />
                <h2>{albumL.title}</h2>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

const mapStatetoProps = (state: AlbunProps) => {
  return {
    DataAlbum: state.album,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetcAlbum: () => dispatch(fetcAlbum()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Album);
