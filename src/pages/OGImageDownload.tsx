export function OGImageDownload() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#1e293b', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>⚡ OG IMAGE SETUP</h1>
      
      <div style={{ backgroundColor: '#334155', padding: '30px', borderRadius: '12px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#fbbf24' }}>JAK NA TO:</h2>
        
        <div style={{ fontSize: '20px', marginBottom: '30px' }}>
          <p style={{ marginBottom: '10px' }}>1️⃣ Ulož fotku (tu co jsi mi poslal) jako:</p>
          <code style={{ backgroundColor: '#1e293b', padding: '10px', display: 'block', fontSize: '18px', color: '#fbbf24' }}>
            /public/og-image.png
          </code>
        </div>

        <div style={{ fontSize: '20px', marginBottom: '30px' }}>
          <p style={{ marginBottom: '10px' }}>2️⃣ Restart serveru:</p>
          <code style={{ backgroundColor: '#1e293b', padding: '10px', display: 'block', fontSize: '18px', color: '#fbbf24' }}>
            Ctrl + C → npm run dev
          </code>
        </div>

        <div style={{ fontSize: '20px' }}>
          <p style={{ marginBottom: '10px' }}>3️⃣ Zkontroluj:</p>
          <a 
            href="/og-image.png" 
            target="_blank"
            style={{ backgroundColor: '#10b981', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block' }}
          >
            Otevřít /og-image.png
          </a>
        </div>
      </div>

      <div style={{ backgroundColor: '#334155', padding: '30px', borderRadius: '12px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#fbbf24' }}>CO JE HOTOVÉ:</h2>
        <ul style={{ fontSize: '18px', lineHeight: '2' }}>
          <li>✅ Meta tagy nastavené</li>
          <li>✅ Open Graph tagy hotové</li>
          <li>✅ Twitter Card ready</li>
          <li>⏳ Čekám na tebe: ulož fotku do /public/og-image.png</li>
        </ul>
      </div>

      <div style={{ backgroundColor: '#334155', padding: '30px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#fbbf24' }}>PO DEPLOY:</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <a
            href="https://developers.facebook.com/tools/debug/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#3b82f6', padding: '15px', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: 'white' }}
          >
            Facebook Debugger →
          </a>
          <a
            href="https://www.linkedin.com/post-inspector/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#0ea5e9', padding: '15px', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: 'white' }}
          >
            LinkedIn Inspector →
          </a>
        </div>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#fbbf24', fontSize: '18px', textDecoration: 'none' }}>
          ← Zpět na hlavní stránku
        </a>
      </div>
    </div>
  );
}
