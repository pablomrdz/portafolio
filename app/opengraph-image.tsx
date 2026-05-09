import { ImageResponse } from 'next/og';

// Configuración de la imagen
export const alt = 'Juan Pablo Márquez | Technical SEO Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      // CONTENEDOR PRINCIPAL (Equivalente al Canvas)
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0d0d10', // Fondo oscuro del portafolio
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 10%, transparent 0%)',
          backgroundSize: '50px 50px', // Sutil patrón de puntos de ingeniería
        }}
      >
        {/* LOGO JP_ */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '100px',
            height: '100px',
            borderRadius: '20px',
            marginBottom: '40px',
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)', // Brillo cyan
          }}
        >
          <span
            style={{
              fontSize: '42px',
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              color: '#0891b2', // Cyan-600
            }}
          >
            JP_
          </span>
        </div>

        {/* NOMBRE */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: '900',
            color: '#fff',
            marginBottom: '10px',
            letterSpacing: '-0.05em',
          }}
        >
          Juan Pablo Márquez
        </div>

        {/* TÍTULO / KEYWORDS */}
        <div
          style={{
            fontSize: '32px',
            color: '#94a3b8', // Slate-400
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <span>Technical SEO Engineer</span>
          <span style={{ color: '#0891b2' }}>•</span>
          <span>Industrial Designer</span>
          <span style={{ color: '#0891b2' }}>•</span>
          <span>Automation</span>
        </div>

        {/* UBICACIÓN (SEO Local) */}
        <div
          style={{
            marginTop: '40px',
            padding: '8px 24px',
            borderRadius: '100px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#64748b',
            fontSize: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          Monterrey, NL / Remote
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}