import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Flex } from 'antd';


function BreadcrumbCus() {

    const breadcrumbStyles = {
        link: { color: 'rgba(255, 255, 255, 0.70)' },
        linkHover: { color: 'rgba(255, 255, 255, 0.92)' },
        lastItem: { color: 'rgba(255, 255, 255, 0.92)', fontWeight: '600' },
        separator: { color: 'rgba(255, 255, 255, 0.75)', margin: '0 0px' },
        icon: { fontSize: 14 },
      };
    
    
      // Get the current location
      const location = useLocation();
    
       // Utility function to format breadcrumb text
       const formatBreadcrumbText = (text) => {
        return text
          .split("-") // Split by dashes
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
          .join(" "); // Rejoin with spaces
      };
    
     // Generate breadcrumb items dynamically from location.pathname
      const generateBreadcrumbs = () => {
        const pathSegments = location.pathname.split("/").filter((segment) => segment);
        const breadcrumbs = pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const formattedTitle = formatBreadcrumbText(segment);
          return { title: formattedTitle, path };
        });
        return [{ title: "Home", path: "/" }, ...breadcrumbs]; // Add Home at the beginning
      };
    
      const breadcrumbs = generateBreadcrumbs();

      // Update the page title based on the last breadcrumb item
    useEffect(() => {
        const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
        const pageTitle = lastBreadcrumb ? lastBreadcrumb.title : "Home";
        document.title = `${pageTitle} | My Application`; // Set the page title
    }, [breadcrumbs]);

    const mainTitle = breadcrumbs[breadcrumbs.length - 1]?.title || "Home";

  return (
    <Flex align='center' className='cus-breadcrumb '>
          <h1 className="head mb-0 ms-4" style={{fontSize:'20px', color:"#fff"}}>{mainTitle} <span style={{opacity:'.75',fontWeight:'400'}} className='ms-2'>/</span></h1>
         <Breadcrumb
            className="ms-3"
            separator={<span style={breadcrumbStyles.separator}>/</span>}
            items={breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return {
               
                title: !isLast ? (
                  <>
                  <Link
                    to={breadcrumb.path}
                    style={breadcrumbStyles.link}
                    onMouseOver={(e) => (e.currentTarget.style.color = breadcrumbStyles.linkHover.color)}
                    onMouseOut={(e) => (e.currentTarget.style.color = breadcrumbStyles.link.color)}
                  >
                    {breadcrumb.title}
                  </Link>
                  </>
                ) : (
                  <span className='' style={breadcrumbStyles.lastItem}>{breadcrumb.title}</span>
                ),
              };
            })}
          />
    </Flex>
  )
}

export default BreadcrumbCus