
import React from 'react';

function Footer({
  brand = 'My Company',
  description = 'Delivering high-quality products and services.',
  links = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  socials = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
    github: '#',
    youtube: '#',
  },
  year = new Date().getFullYear(),
  sticky = false, // set true to stick footer to bottom of viewport
}) {
  return (
    <footer
      className={`bg-dark text-light ${sticky ? 'fixed-bottom' : ''}  `}
      aria-label="Site footer"
    >
      <div className="container py-4 mt-4 mb-0">
        <div className="row g-4 align-items-start">
          {/* Brand / About */}
          <div className="col-12 col-md-6 col-lg-4">
            <h5 className="mb-2">{brand}</h5>
            <p className="text-secondary mb-0">{description}</p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="text-uppercase text-secondary">Links</h6>
            <ul className="list-unstyled">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-decoration-none text-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          {/* Social Icons */}
          <div className="col-12 col-lg-3">
            <h6 className="text-uppercase text-secondary">Follow us</h6>
            <div className="d-flex flex-wrap gap-3">
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  className="btn btn-outline-light btn-sm"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  className="btn btn-outline-light btn-sm"
                  aria-label="Twitter / X"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              )}
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  className="btn btn-outline-light btn-sm"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  className="btn btn-outline-light btn-sm"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {socials.github && (
                <a
                  href={socials.github}
                  className="btn btn-outline-light btn-sm"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
              )}
              {socials.youtube && (
                <a
                  href={socials.youtube}
                  className="btn btn-outline-light btn-sm"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom bar */}
        
      </div>
    </footer>
  );
}

export  {Footer};
