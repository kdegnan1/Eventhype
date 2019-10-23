class User < ApplicationRecord
    validates :session_token, :password_digest, :fname, :lname, presence: true 
    validates :email, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true} 
    attr_reader :password 
    after_initialize :ensure_session_token 

    ##create associations ! 

    has_many :events, 
    foreign_key: :creator_id, 
    class_name: :Event

    has_many :event_registrations, 
    foreign_key: :user_id, 
    class_name: :EventRegistration 

    has_many :registered_events, 
    through: :event_registrations,
    source: :event 

    ##FIGVAPER 
    def self.find_by_credentials(email, password) 
        # debugger
        user = User.find_by(email: email)  
        # debugger
        return nil unless user 

        if user.is_password?(password) 
            # debugger
            return user 
        else 
            # debugger
            return nil
        end
    end

    def is_password?(password) 
        # debugger
        pw = BCrypt::Password.new(self.password_digest)
        # debugger
       pw.is_password?(password)
    end 

    def self.generate_session_token 
        SecureRandom.urlsafe_base64 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end 
end