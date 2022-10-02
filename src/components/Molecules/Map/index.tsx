import { useMemo, useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import PinLocatiom from "../../Atoms/PinLocation";

type Props = {
  className: string;
};

const Maps = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const center = useMemo(
    () => ({ lat: -6.121497347635725, lng: 106.17672443389894 }),
    []
  );

  return (
    <>
      <GoogleMap
        mapContainerClassName={props.className}
        center={center}
        zoom={15}
      >
        <Marker position={center} onClick={() => setShow(!show)} />
        {!show ? (
          " "
        ) : (
          <InfoWindow position={center}>
            <div className="bg-white p-2">
              <h1>Come On dude!</h1>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};

export default Maps;
