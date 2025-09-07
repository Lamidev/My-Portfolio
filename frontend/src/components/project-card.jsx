

import { Card, Badge } from "react-bootstrap";
import { useState } from "react";

const ProjectCard = ({ title, description, image, link, technologies = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="h-100 border-0 shadow-sm"
      style={{
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        overflow: "hidden"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        style={{ 
          overflow: "hidden",
          height: "200px",
          position: "relative"
        }}
      >
        <Card.Img 
          variant="top" 
          src={image} 
          style={{ 
            height: "100%", 
            objectFit: "cover",
            transition: "all 0.5s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }} 
        />
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            alignItems: "flex-end",
            padding: "1rem"
          }}
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-light btn-sm"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease"
            }}
          >
            View Project
          </a>
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h5">{title}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {description}
        </Card.Text>
        
        {/* Technology badges */}
        {technologies.length > 0 && (
          <div className="mt-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                bg="light" 
                text="dark" 
                className="me-2 mb-2"
                style={{ 
                  fontSize: "0.75rem",
                  background: "rgba(190, 86, 74, 0.1) !important",
                  color: "#BE564A !important"
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;