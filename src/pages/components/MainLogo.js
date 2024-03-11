import FavoriteIcon from '@mui/icons-material/Favorite';

export function MainLogo() {

  return (
    <div className="mainLogo">
        <div className="mainLogoNames">Lizzete</div>
        <div className="mainLogoAnd">&</div>
        <div className="mainLogoNames">Daniel</div>
    </div>
  )
}

export function TopLogoInvitation() {

    return (
      <div className="topLogo">
          <div>Lizzete & Daniel</div>
      </div>
    )
  }

  export function SmallLogo() {

    return (
      <div className="smallLogo">
       <div>L</div> 
        <FavoriteIcon/>
         <div>D</div>
      </div>
    )
  }