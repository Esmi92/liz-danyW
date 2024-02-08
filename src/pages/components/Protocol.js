import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Divider from '@mui/material/Divider';
import branch from '../../assets/branch.svg';

const mainColor = '#0b2c55';

export default function Protocol({ matches }) {
    const dividerWidth = matches ? "80%" : "50%";
    const smallDivider = matches ? "50%" : "30%";

    return (
        <div className="ProtocolComponent">
            <div className='dynamicTitle'>
                <p className="SectionTitle">PROTOCOLO</p>
                {matches && <img src={branch} className="dynamicImage" alt="logo" />}
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
            <div className='notAllow'>
                <NotInterestedIcon style={{ fontSize: "4vh", color: mainColor }} />
                <p>No rojo</p>
                <p>No blanco</p>
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
            <div className='dresscodeSection'>
                <p className="ProtocolDescription">Bussiness Casual</p>
                <p className="ProtocolDescription">Vestido Largo Formal</p>
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: smallDivider }} />
            <p className='notAllow'>Por seguridad de las infancias no se permitirán niños.</p>
        </div>
    )
}