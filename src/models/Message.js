import mongoose from "mongoose";

/**
 * Generates a unique identifier for a message
 * @returns {string} A unique message ID
 */
function generateId() {
  /**
   * TODO(nasr): think about a system for generating id's
   * Temporary solution: timestamp + random string
   * */
}

/**
 * Represents a message between two users
 * @class Message
 * @property {string} id - Unique identifier for this message
 * @property {string} senderId - ID of the message sender
 * @property {string} receiverId - ID of the message receiver
 * @property {string} contents - The message content
 * @property {Date} timestamp - When the message was created
 * @property {boolean} isRead - Whether the message has been read by the receiver
 * @property {boolean} isDelivered - Whether the message has been delivered to the receiver
 * @property {string|null} conversationId - ID of the conversation this message belongs to
 */

/**
 * Creates a new message instance
 * @param {string} senderId - The ID of the user sending the message
 * @param {string} receiverId - The ID of the user receiving the message
 * @param {string} contents - The message content/text
 */

export class messsage 
{
  constructor(senderId, receiverId, contents) 
  {
    this.id = generateId();
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.contents = contents;
    this.timestamp = new Date();
    this.isRead = false;
    this.isDelivered = false;
    this.conversationId = null;
  }


  const sender = {
    senderId: { type: String, required: true },
  }
  const receiver = {
    receiverId: { type: String, required: true },
  }
}

