import WomanIcon from '@mui/icons-material/Woman';
import Man4Icon from '@mui/icons-material/Man4';
import Divider from '@mui/material/Divider';
import branch from '../../assets/branch.svg';

const mainColor = '#9D7F63';

export default function Protocol({ matches }) {
    const dividerWidth = matches ? "80%" : "50%";
    const smallDivider = matches ? "50%" : "30%";
    const horizontalDivider = '6vh';

    return (
        <div className="ProtocolComponent">
            <div className='dynamicTitle'>
                {matches && <img src={branch} className="dynamicImage" alt="logo" />}
                <p className="SectionTitle"><b>PROTOCOLO</b></p>
                {matches && <img src={branch} className="dynamicImage dynamicImageRotate" alt="logo" />}
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />

            <p className="ProtocolDescription"><b>Código de vestimenta:</b> Formal</p>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
    
            <div className='dresscode'>
            <WomanIcon style={{ fontSize: "6vh", color: mainColor }} />
            <Divider orientation="vertical" style={{ borderColor: mainColor, height: horizontalDivider }} />
            <p>Vestido Largo</p>
            <Divider orientation="vertical" style={{ borderColor: mainColor, height: horizontalDivider }} />
                <div>
                    <p>No Blanco</p>
                    <p>No Rojo</p>
                </div>
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: smallDivider }} />
            <div className='dresscode'>
            <Man4Icon style={{ fontSize: "6vh", color: mainColor }} />
            <Divider orientation="vertical" style={{ borderColor: mainColor, height: horizontalDivider }} />
            <p>Formal</p>
            <Divider orientation="vertical" style={{ borderColor: mainColor, height: horizontalDivider }} />
                <div>
                    <p>No Guayabera</p>
                </div>
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />

            <p className='notAllow'>Nuestra celebración será exclusivamente para adultos, agradecemos tu comprensión</p>
        </div>
    )
}