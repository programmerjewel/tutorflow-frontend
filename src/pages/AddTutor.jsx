const AddTutor = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-6">Add Tutor</h2>
      <form action="">
        <div className="grid grid-cols-1 gap-3 w-8/12 mx-auto">
          <div>
            <label className="label flex">Your Name</label>
            <input className="input w-full" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label className="label flex">Email</label>
            <input className="input w-full" type="email" placeholder="Email" />
          </div>
          <div>
            <label className="label flex">Image</label>
            <input className="input w-full" type="url" placeholder="Image URL" />
          </div>
          <div>
            <label className="label flex">Select a Language</label>
            <select className="select w-full" name="" id="">
              <option value="" disabled>Select a Language</option>
              <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="label flex">Add Price</label>
            <input className="input w-full" type="number" placeholder="Price" />
          </div>
          <div>
            <label className="label flex">Description</label>
            <textarea class="textarea w-full" placeholder="Add Description"></textarea>
          </div>
          <div>
            <label className="label flex">Review</label>
            <input class="input w-full" type="number" placeholder="Review out of 5"/>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <button className="btn btn-wide  btn-secondary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTutor;
