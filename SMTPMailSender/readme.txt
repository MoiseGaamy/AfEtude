SMTP Mail Sender
version 1.0.0.26

Copyright © 2021 HazteK Software. All Rights Reserved.
------------------


Usage
------------------

SMTP Mail Sender is pretty self-explanatory, but some of the features may not
be easily recognizable.

* From field - This is just who will be visible in the "From" section of the 
  delivered email message. Most servers require this to be a valid address
  registered on the server otherwise it will be blocked.

* To field - This is who you are sending the message to. You can click on the
  word "To:" and open the address book to auto fill this box if you have any
  addresses in the address book.

  * Edit Address book - Choose this to open the address book editor to add/
    remove addresses from the address book.

  * Add Multiple Addresses - Allows you to select multiple recipients at once
    so you don't waste your time clicking repeatedly.

  * Add a new entry - Exactly what it says

  * Delete - deletes the selected item in the list.

  * Click save to save and close the dialog, otherwise click the X or Cancel
    buttons.
    
* CC, BCC fields - These act identically to the To field, but for carbon copies
  and blind carbon copies when sending messages.

* Subject field - This is the subject of the message. What more can I say?

* Attachment(s) field - You can add attachments to the file via the Add button
  or by dragging files from Explorer into the box. You can add multiple files
  and folders simultaneously if necessary.

* Open Text File - Opens a text file and puts the contents into the body. This
  will overwrite anything that is currently in the message body.

* Insert Text File - Opens a text file and inserts that data from that file at
  the current cursor position. It will not overwrite anything already existing
  in the message body.

* Message Body field - This is where you type your plain text message. There is
 not support for rich text or HTML messages in this application.

* Settings - This opens a dialog in which you can supply necessary settings
  required for the application to work.

  * Server field - This is the SMTP mail server which you will relay your
    message through.

  * Port field - This is the port that the application should connect to on
    the SMTP server. Default SMTP port is 25.

  * Secure Connection (SSL) - Enables an SSL layer for securing your message
    transaction with the server.

  * Server requires authentication - Check this if your server does.

  * Username field - your username for the server if the previous check box is
    checked.

  * Password field - your password for the server if the previous check box is
    checked.

  * Composition Font - You can specify the composition font if you do not like
    the default Courier New font. This formatting will not be sent to the
    recipient, as the message is plain text. It is only for the sender's con-
    venience
    
  * Advertise HazteK Software in outgoing messages - This just puts a simple
    footer on any outgoing messages with a link to HazteK Software. It is dis-
    abled by default, you have to manually turn it on and only serves the pur-
    pose of sending people to my website so they can see my applications them-
    selves.

  * About... - Show information about the application.
  
Command Line Arguments
------------------

SMTP Mail Sender accepts command line arguments. To send command arguments with
spaces, you need to enclose the argument in a space, i.e.

-subject "This is my cool subject" -from user@example.org

The following arguments are currently supported:

-a, -attachment	           - This attaches the specified file to the message.
                             You can use multiple -a arguments to add more
                             than one attachment on a single message.
-addbook "file.txt"        - Loads the specified address book file or creates
                             it if the file doesn't exist yet.
-b, -body, -message, -msg  - This puts whatever you supply at the command line
                             into the message body. You can also supply a file
                             name and if the file exists, will load that into
                             the body of the message.
-c, -config                - This loads the configuration file specified, not
                             the config.conf file in the application directory.
-f, -from                  - Sets the from field
-g, -log                   - Log to smtpsend.log in "start in" directory
-logfile                   - Override the log file path & name, example:
                             -logfile C:\Windows\Logs\smtpsend.log
-l, -language              - Loads the language file that is passed in. The
                             language files can be found in the .\lang folder.
                             example: -l lang\lang.es.txt will load Spanish
-s, -subject               - Sets the subject field
-send                      - Automatically send the message after filling in
                             all the fields specified with other arguments.
                             (Note: the application must be configured before
                              this will work properly.)
-t, -to                    - Sets the to field. Separate addresses with a comma
-cc                        - Sets the CC field.
-bcc                       - Sets the BCC field.
-r                         - Sets the Reply-To field.
-username                  - Pass in a plain text username to authenticate with
-password                  - Pass in a plain text password to authenticate with
-timeout                   - Sets the SMTP timeout in seconds. Default is 100.




Any other questions should be directed to me via the contact page on the web-
site, http://www.haztek-software.com/contact.html. Thanks for using my free
software!

Translation
------------------

This application can be translated! If you would like to translate it to your
own language, please edit one of the existing existing language files. If you
translate to a new language that is not included with the application, please
send me the file so I can include it in the release. Or if you can update the
file to be more accurate and want to share with the community. The translations
included with the program are crudely done with babelfish and I am sure can be
better translated.

Hidden Objects
------------------

If you are running in a controlled environment, you may wish to hide certain
buttons in the user interface. This can be accomplished with a configuration
file called "hide.txt" in the application directory. See comments in the 
hide.txt file provided with this package for detailed information.

Changes
------------------
Please see the changes.txt file included with this release