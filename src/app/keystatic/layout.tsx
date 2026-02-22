import KeystaticApp from './keystatic';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />
            <body>
                <KeystaticApp />
            </body>
        </html>
    );
}
