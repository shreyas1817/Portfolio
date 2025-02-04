import {Col} from 'react-bootstrap';


export const ProjectCard = ({title, description, link, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br/>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">Click to here view</a>
                </div>
            </div>
        </Col>
    )
}