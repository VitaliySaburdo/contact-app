import { Audio } from 'react-loader-spinner'

export const Loader = () => {
    return(<Audio
    height = "80"
    width = "80"
    radius = "9"
    color = '#455a64'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle={{
        position: 'fixed',
        top: '5%',
        left: '50%',
      }}
        wrapperClass="blocks-wrapper"
        
  />)

}
