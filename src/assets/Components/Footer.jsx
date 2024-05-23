import "/src/index.css"
import reactlogo from "/src/assets/react.svg";
export default function Footer(){
    return(
        <div className="footer">
        
        <p className="Topic">Created Using:
            <img src={reactlogo} alt="React" />
        </p>

        </div>
    )
}