// Keystatic admin is only available in local development.
// In the static production build it is not accessible.
export default function Page() {
    return (
        <div style={{ textAlign: 'center', padding: '4rem' }}>
            <h1>Admin Panel</h1>
            <p>The CMS admin panel is only available when running the project locally.</p>
        </div>
    );
}
