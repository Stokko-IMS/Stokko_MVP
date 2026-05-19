import { Link } from "react";

export default function FeaturesSection() {
  return (
    <section id="features">
      <h1>Features</h1>
      <div>
        <div>
          <h2>Mobile First Design</h2>
          <img src="../assets/features1" alt="" />
          <p>
            At Stokko, we know how much you are on the go as a business owner.
            Becasue of that, we've designed our app to be used primarily from
            your mobile device. Now you wont have to worry about making it all
            the way back to your desktop and hoping that you remembered your
            stock-take properly.
          </p>
        </div>
        <div>
          <h2>Add Items to Inventory</h2>
          <p>
            Make managing your inventory super easy without settling for
            pen/paper or applications like excel. With Stokko you can have every
            item in your business, or warehouse kept in an inventory table with
            all of its pertinent information such as: an image of the item, it's
            name, sku number, and quantity.
          </p>
          <img src="../assets/features2" alt="" />
        </div>
        <div>
          <h2>Low-Stock Threshold</h2>
          <img src="../assets/features3" alt="" />
          <p>
            With Stokko, you can also set a "low-stock threshold" to every
            single item. When the item quantity hits its low-stock threshold, an
            alert will be generated on multiple spots throughout the app which
            will let you know, so you'll never run out of stock again.
          </p>
        </div>
        <div>
          <h2>Generate Orders to Email</h2>
          <p>
            When viewing the low-stock items in your inventory, you can now
            generate an order that gets sent to an email of your choice for
            approval. Your orders also get saved, so you can: View old orders
            for auditing, view current orders that have been accepted, or view
            orders that still need approval.
          </p>
          <img src="../assets/features4" alt="" />
        </div>
        <div>
          <h2>Automatic Audit Log Generation</h2>
          <img src="../assets/features5" alt="" />
          <p>
            Every single time an item from your inventory or an order gets
            entered, updated, or deleted, a log will be generated automatically.
            This is perfect for making sure you have ultimate control over every
            decision your company makes in regards to its inventory.
          </p>
        </div>
        <Link to="/register">Get Started Now</Link>
        <div>
          <h2>Future Stretch Goals</h2>
          <h3>Multi-Role and Location Integration</h3>
          <p>
            Our first stretch goal is to integrate a multi-role and location
            feature. With this feature, businesses will be able to assign users
            with roles thus giving managers, or admins extra privileges.
            Businesses will also be able to assign their inventory and orders to
            locations making organization more efficient.
          </p>
          <h3>Barcode Scanning</h3>
          <p>
            One of the first stretch goals is integrating a barcode scanning
            feature that allows you to use your phone camera to scan a barcode
            of an item that is already in your inventory and update the stock
            automatically with it.
          </p>
          <h3>OCR Invoice Scanning</h3>
          <p>
            Another big stretch goal is utilizing OCR 'Optical Character
            Recognition'. This will allow the user to scan any invoice they
            receive from any vendor and automatically update their stock with
            it.
          </p>
          <h3>Precise Analytics</h3>
          <p>
            Using all of the information we collect in our database, Stokko
            plans to integrate it and be able to show the user a wide variety of
            metrics and trends related to their past, present, and future
            inventory.
          </p>
          <h3>Automatic Order Sending</h3>
          <p>
            Another big feature Stokko plans to implement is automatic order
            sending. We plan to let the user save their suppliers stores to
            their profile by item, and when an order gets approved, the user
            will have an option to send that order immediately
          </p>
        </div>
      </div>
    </section>
  );
}
