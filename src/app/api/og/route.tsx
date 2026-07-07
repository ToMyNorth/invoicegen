import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get parameters from URL
    const title = searchParams.get('title') || 'Free Invoice Generator';
    const subtitle = searchParams.get('subtitle') || 'Create professional invoices in seconds';
    const type = searchParams.get('type') || 'default';
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            padding: '40px',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#2563eb',
              }}
            >
              📄 InvoiceGen
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1f2937',
              marginBottom: '16px',
              maxWidth: '800px',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              textAlign: 'center',
              color: '#6b7280',
              maxWidth: '700px',
            }}
          >
            {subtitle}
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              right: '40px',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '20px',
              color: '#9ca3af',
            }}
          >
            <span>invoicegen.top</span>
            <span>Free • No Signup • Download PDF</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
