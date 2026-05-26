import { Link } from "react-router-dom";
import Stokko_features_1 from "../../assets/Stokko_features_1.jpg";
import Stokko_features_2 from "../../assets/Stokko_features_2.jpg";
import Stokko_features_3 from "../../assets/Stokko_features_3.jpg";
import Stokko_features_4 from "../../assets/Stokko_features_4.jpg";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 px-4 py-16 md:px-8"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8">
          <h1>Features</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Everything you need to keep stock organized, visible, and easy to
            manage.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-3">Mobile First Design</h2>
            <img
              src={Stokko_features_1}
              alt=""
              className="mb-3 h-44 w-full rounded-stokko object-cover"
            />
            <p className="leading-7 text-slate-600">
              At Stokko, we know how much you are on the go as a business owner.
              Becasue of that, we've designed our app to be used primarily from
              your mobile device. Now you wont have to worry about making it all
              the way back to your desktop and hoping that you remembered your
              stock-take properly.
            </p>
          </div>

          <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-3">Add Items to Inventory</h2>
            <img
              src={Stokko_features_2}
              alt=""
              className="mb-3 h-44 w-full rounded-stokko object-cover"
            />
            <p className="leading-7 text-slate-600">
              Make managing your inventory super easy without settling for
              pen/paper or applications like excel. With Stokko you can have
              every item in your business, or warehouse kept in an inventory
              table with all of its pertinent information such as: an image of
              the item, it's name, sku number, and quantity.
            </p>
          </div>

          <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-3">Low-Stock Threshold</h2>
            <img
              src={Stokko_features_3}
              alt=""
              className="mb-3 h-44 w-full rounded-stokko object-cover"
            />
            <p className="leading-7 text-slate-600">
              With Stokko, you can also set a "low-stock threshold" to every
              single item. When the item quantity hits its low-stock threshold,
              an alert will be generated on multiple spots throughout the app
              which will let you know, so you'll never run out of stock again.
            </p>
          </div>

          <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-3">Generate Orders</h2>
            <img
              src={Stokko_features_4}
              alt=""
              className="mb-3 h-44 w-full rounded-stokko object-cover"
            />
            <p className="leading-7 text-slate-600">
              When viewing the low-stock items in your inventory, you can now
              generate an order that gets sent to an email of your choice for
              approval. Your orders also get saved, so you can: View old orders
              for auditing, view current orders that have been accepted, or view
              orders that still need approval.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-xl bg-amber px-8 py-4 text-lg font-extrabold text-deep shadow-xl shadow-amber-[0_10px_30px_rgba(245,158,11,0.35)] transition hover:scale-[1.03] hover:bg-amber/90 active:scale-[0.98]"
          >
            Get Started Now
          </Link>
        </div>
        {/* Had existing code here, and asked AI to help with styling via tailwindCSS. This looks a lot cleaner, so a copy & paste was used */}
        <section className="relative mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
          <div className="mb-8">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber">
              Future roadmap
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Future Stretch Goals
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {[
              [
                "Multi-Role and Location Integration",
                "Our first stretch goal is to integrate a multi-role and location feature. With this feature, businesses will be able to assign users with roles thus giving managers, or admins extra privileges. Businesses will also be able to assign their inventory and orders to locations making organization more efficient.",
              ],
              [
                "Barcode Scanning",
                "One of the first stretch goals is integrating a barcode scanning feature that allows you to use your phone camera to scan a barcode of an item that is already in your inventory and update the stock automatically with it.",
              ],
              [
                "OCR Invoice Scanning",
                "Another big stretch goal is utilizing OCR 'Optical Character Recognition'. This will allow the user to scan any invoice they receive from any vendor and automatically update their stock with it.",
              ],
              [
                "Precise Analytics",
                "Using all of the information we collect in our database, Stokko plans to integrate it and be able to show the user a wide variety of metrics and trends related to their past, present, and future inventory.",
              ],
              [
                "Automatic Order Sending",
                "Another big feature Stokko plans to implement is automatic order sending. We plan to let the user save their suppliers stores to their profile by item, and when an order gets approved, the user will have an option to send that order immediately",
              ],
              [
                "Automatic Audit Logs",
                "Every single time an item from your inventory or an order gets entered, updated, or deleted, a log will be generated automatically. This is perfect for making sure you have ultimate control over every decision your company makes in regards to its inventory.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 shadow-lg shadow-slate-300/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 h-1 w-14 rounded-full bg-amber" />
                <h3 className="mb-3 text-xl font-extrabold">{title}</h3>
                <p className="text-base text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
