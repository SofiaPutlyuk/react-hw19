import { ClipLoader } from 'react-spinners';
export const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <ClipLoader color="#3f51b5" size={50} />
        </div>
    )
}