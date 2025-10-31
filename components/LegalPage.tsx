import React from 'react';

interface LegalPageProps {
  navigateTo: (page: string) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ navigateTo }) => {
  return (
    <section className="py-24 pt-40 bg-[#1a202c]">
      <div className="container mx-auto px-6 text-gray-300 max-w-4xl">
        <button onClick={() => navigateTo('main')} className="mb-8 text-blue-400 hover:text-blue-300 transition-colors">
          &larr; Volver a la página principal
        </button>

        <h1 className="text-4xl font-extrabold text-white mb-8">Términos y Condiciones y Política de Cookies</h1>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Términos y Condiciones</h2>
            <div className="space-y-4 prose prose-invert text-gray-300">
              <p>Última actualización: {new Date().toLocaleDateString()}</p>
              <p>Bienvenido al sitio web de Avance Global Basketball Cup. Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.</p>
              
              <h3 className="text-xl font-semibold text-white">1. Propiedad Intelectual</h3>
              <p>El contenido de este sitio, incluyendo textos, gráficos, logos, e imágenes, es propiedad de AVANCE Global y está protegido por las leyes de derechos de autor. Queda prohibida la reproducción, distribución o modificación no autorizada de cualquier material sin nuestro consentimiento previo por escrito.</p>

              <h3 className="text-xl font-semibold text-white">2. Uso del Sitio Web</h3>
              <p>Este sitio web tiene fines informativos sobre el evento Avance Global Cup 2026. Usted se compromete a no utilizar el sitio para ningún propósito ilegal o que pueda dañar la reputación del evento o de sus organizadores.</p>

              <h3 className="text-xl font-semibold text-white">3. Exclusión de Responsabilidad</h3>
              <p>La información en este sitio web se proporciona "tal cual", sin garantías de ningún tipo. Aunque nos esforzamos por mantener la información actualizada y correcta, no garantizamos su integridad o exactitud. AVANCE Global no será responsable de ninguna pérdida o daño derivado del uso de este sitio.</p>

              <h3 className="text-xl font-semibold text-white">4. Ley Aplicable</h3>
              <p>Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de España, y cualquier disputa estará sujeta a la jurisdicción exclusiva de los tribunales de Málaga.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Política de Cookies</h2>
            <div className="space-y-4 prose prose-invert text-gray-300">
              <p>Este sitio web utiliza cookies para mejorar su experiencia de usuario. Una cookie es un pequeño archivo de texto que se almacena en su navegador.</p>
              
              <h3 className="text-xl font-semibold text-white">1. ¿Qué cookies utilizamos?</h3>
              <p><strong>Cookies Esenciales:</strong> Utilizamos cookies que son estrictamente necesarias para el funcionamiento del sitio web. Por ejemplo, utilizamos una cookie para recordar su consentimiento sobre nuestra política de cookies.</p>
              <p><strong>Cookies de Terceros:</strong> No utilizamos cookies de análisis, marketing o de terceros en este momento. Si esto cambia en el futuro, actualizaremos esta política.</p>

              <h3 className="text-xl font-semibold text-white">2. ¿Cómo gestionar las cookies?</h3>
              <p>Al visitar nuestro sitio por primera vez, se le presentará un banner de consentimiento de cookies. Puede aceptar el uso de cookies para ocultar este banner en futuras visitas. También puede gestionar y eliminar cookies a través de la configuración de su navegador web. Tenga en cuenta que deshabilitar las cookies esenciales puede afectar la funcionalidad del sitio.</p>
              
              <h3 className="text-xl font-semibold text-white">3. Contacto</h3>
              <p>Si tiene alguna pregunta sobre nuestros términos o nuestra política de cookies, puede contactarnos a través de la información proporcionada en la sección de contacto de este sitio web.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;