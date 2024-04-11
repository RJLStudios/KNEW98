function Mailing() {

  return (
    <>
      <form className='Mailing'>

        <div className='Join-List'>JOIN THE FAMILY</div>
        <label class="Mail-Bio" for="textArea">
         SIGN UP TO RECEIVE NEWS AND UPDATES
        </label>

        <div className='Form-Wrapper'>
        <textarea
          type="text"
          id="formControlSm"
          class="Mailing-Input"
          rows="4"
          name="message"
          placeholder="YOUR EMAIL ADDRESS"
        />
   
                <input className="Mail-Btn" type="submit" value="SEND" />
   
        </div>

      </form>
    </>
  )
}

export default Mailing;
